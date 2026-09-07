---
qid: ing_3e22f183ae__aws__local
question: 'Q60: How would you evaluate whether an LLM is hallucinating?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 473
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:46:37-05:00'
sources: []
---

**Situation:**  
At my last role I led the rollout of a customer‑service chatbot that leveraged an LLM (OpenAI GPT‑4). Early production traffic revealed “hallucinations” – factually incorrect statements that risked damaging brand trust.

**Task:**  
I had to build a robust, automated pipeline to detect and quantify hallucinations so we could iterate on the model and guard user experience without adding latency or cost.

**Action:**  
1. **Define Hallucination Criteria** – “Any factual claim not supported by our knowledge base (KB) or external verified sources.”  
2. **Ground Truth Dataset** – Curated 5,000 customer queries + manual label set (≈30% hallucinated).  
3. **Detection Engine** –  
   * Use Amazon Comprehend for entity extraction and sentiment.  
   * Pass the response to an AWS Lambda that calls a custom rule‑based scorer:  
     * Compare extracted entities against KB in DynamoDB and external APIs (e.g., Wikipedia via AWS API Gateway).  
     * Assign a hallucination score (0–1) per claim; flag if > 0.7.  
4. **Metrics & Alerting** –  
   * Deploy CloudWatch dashboards: % hallucinated responses, mean confidence score, latency impact.  
   * Set SNS alerts when hallucination rate > 5% in any 15‑min window.  
5. **Iterative Feedback Loop** – Feed flagged samples back to the training team; use SageMaker Pipelines to retrain the model with augmented data.

**Result:**  
*Reduced hallucination rate from 18% to < 3% within 4 weeks.*  
*Latency added was only +12 ms per request, staying under our SLA of 200 ms.*  
*Cost impact: ~$0.02 extra per 1,000 requests (AWS Lambda + Comprehend), negligible against overall spend.*

**Reflection:**  
I owned the end‑to‑end pipeline, dove deep into claim verification logic, and quantified impact with clear metrics. The bar‑raiser will note my focus on ownership, measurable results, and learning loop that turns failures into continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
