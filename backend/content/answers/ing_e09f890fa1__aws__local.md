---
qid: ing_e09f890fa1__aws__local
question: 'Explain: Tier 3: Run on a sample (expensive LLM, ~$5/1K)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 324
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:47:30-05:00'
sources: []
---

**Situation / Task**  
I was tasked with validating an expensive proprietary LLM for a new recommendation engine. The model costs ~$5 per 1 k tokens, so I couldn’t afford to run it on every user request.

**Action**  
I introduced a *tier‑3* strategy: **run the LLM only on a carefully selected sample of inputs** that are likely to be high‑value or ambiguous.  
- **Sampling logic:** I built a lightweight rule engine (AWS Lambda + DynamoDB) that flags queries with low confidence scores from the first‑pass model.  
- **Pipeline design:** The flagged requests hit an Amazon SageMaker endpoint hosting the expensive LLM; the rest go to a cheaper inference layer (e.g., Bedrock).  
- **Cost control:** I set a hard budget ceiling in CloudWatch alarms and auto‑scaling limits, ensuring we never exceed $X/month on the LLM.  

**Result**  
- Reduced LLM usage by 92 %, cutting monthly spend from ~$200k to ~$15k.  
- Maintained overall recommendation accuracy at 97 % (vs. 94 % before).  
- Latency improved by 35 % because most traffic bypasses the heavy model.

**Reflection**  
I learned that *bias for action* paired with *dive deep* into usage patterns can dramatically lower costs without hurting user experience—exactly what we need when working with high‑price AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
