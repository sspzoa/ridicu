import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { words } = await req.json();

    const prompt = `
다음 영어 단어 목록을 사용하여 각 단어에 대해 다음 정보를 포함하는 JSON 데이터를 생성해 주세요:
- word: 단어
- pronunciation: 한국어 발음
- mnemonic: 발음을 이용한 한국어 암기 문장, 문장이 단어의 뜻을 기억하도록 간접적으로 유도해야함.
- example: 단어를 사용한 영어 예문
- meaning: 단어의 한국어 뜻

응답은 다른 텍스트 없이 JSON 형식의 텍스트로만 해주세요.

단어 목록:
${words.join(', ')}

예시:
[
  {
    "word": "torture",
    "pronunciation": "토처",
    "mnemonic": "곤장을 또 쳐",
    "example": "The prisoner confessed under torture.",
    "meaning": "고문하다, 고문"
  },
  {
    "word": "measure",
    "pronunciation": "메저",
    "mnemonic": "줄자로 매 줘",
    "example": "We need to measure the size of the window.",
    "meaning": "측정하다, 조치"
  }
]
`;

    const completion = await openai.chat.completions.create({
      model: 'chatgpt-4o-latest',
      messages: [{ role: 'user', content: prompt }],
    });

    const content = completion.choices[0].message.content;

    if (!content) {
      return NextResponse.json({ error: 'OpenAI API 응답이 비어있습니다' }, { status: 500 });
    }

    try {
      const jsonString = content.replace(/```json\n?|\n?```/g, '').trim();
      const parsedContent = JSON.parse(jsonString);
      return NextResponse.json({ result: parsedContent });
    } catch (parseError) {
      console.error('JSON 파싱 오류:', parseError);
      return NextResponse.json({ error: '유효한 JSON이 아닙니다', rawContent: content }, { status: 400 });
    }
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json({ error: '내부 서버 오류' }, { status: 500 });
  }
}
