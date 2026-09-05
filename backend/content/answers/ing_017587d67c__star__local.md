---
qid: ing_017587d67c__star__local
question: How do you measure faithfulness - whether the model's answer is actually
  grounded in retrieved context?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 391
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:31:13-05:00'
sources: []
---

**Situation:**  
While leading a retrieval‑augmented chatbot for medical triage at HealthTech Inc., we noticed that 18 % of the generated responses contained statements not supported by the retrieved patient records or guidelines, causing potential safety risks.

**Task:**  
I had to build an automated faithfulness evaluation pipeline so we could quantify how often the model’s answers actually reflected the evidence it was given and reduce hallucinations before deployment.

**Action:**  
First, I defined a “faithfulness score” as the proportion of factual claims in the response that could be matched to at least one token‑level span in the top‑retrieved documents. To compute this, I used spaCy for entity extraction, then aligned each claim with the retrieved docs using cosine similarity over BERT embeddings (SBERT). Claims with a similarity > 0.75 were counted as faithful. I added a secondary human‑in‑the‑loop check on 200 random samples to calibrate the threshold and adjusted it until the automated score correlated at r = 0.82 with manual judgments. Finally, I integrated this metric into our nightly evaluation suite.

**Result:**  
After deploying the new pipeline, we cut hallucination rates from 18 % to 6 % over three months, while maintaining a 95 % recall of key clinical facts. The experience taught me that combining NLP similarity with structured claim extraction yields a practical, reproducible faithfulness metric for safety‑critical AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
