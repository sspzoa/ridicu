import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { words } = await req.json();

    const prompt = `
      다음 단어 목록을 사용하여 단어, 발음, 암기법, 예문, 뜻을 포함하는 데이터 반환해줘.
      응답은 다른 텍스트 없이 Json 형식의 텍스트로 해줘.
     
      :${words.join(', ')} 
    
      Ex)
      [
        {
          "word": "Diligent",
          "pronunciation": "딜리전트",
          "mnemonic": "딜을 이리도 전투적으로!",
          "example": "She is diligent in her studies.",
          "meaning": "부지런한, 성실한"
        },
        {
          "word": "Eloquent",
          "pronunciation": "엘러퀀트",
          "mnemonic": "엘레강스하게 말을 퀸처럼",
          "example": "He gave an eloquent speech.",
          "meaning": "유창한, 설득력 있는"
        }
      ]
    `;

    const completion = await openai.chat.completions.create({
      model: 'chatgpt-4o-latest',
      messages: [{ role: 'user', content: prompt }],
    });

    const content = completion.choices[0].message.content;

    try {
      const parsedContent = JSON.parse(content || '{}');
      return NextResponse.json({ result: parsedContent });
    } catch (parseError) {
      console.error('JSON 파싱 오류:', parseError);
      return NextResponse.json({ result: content, parseError: '유효한 JSON이 아닙니다' });
    }
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json({ error: '내부 서버 오류' }, { status: 500 });
  }
}
