---
qid: ing_9508ea5611__aws__local
question: 'Explain: VLM vs OCR+LLM - the central tradeoff — Document Intelligence
  Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 542
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:02:50-05:00'
sources: []
---

**Scenario (S)**  
At my previous company we built a document‑intelligence pipeline for a multinational bank that had to process ~1 M PDFs per month and extract structured data for compliance. We could either:  

* **VLM (Vision‑Language Model)** – one end‑to‑end model that reads the image, understands layout, and outputs entities;  
* **OCR + LLM** – first OCR → text, then a large language model to interpret it.

**Task (T)**  
Decide which approach gives us the best balance of cost, latency, accuracy, and maintainability while staying within our $200k/yr budget.

**Action (A)**  
I led a cross‑functional squad that:

1. **Defined metrics** – Accuracy (F1), Latency (< 2 s per doc), Cost ($/doc), and Model drift tolerance.
2. **Built prototypes** –  
   * VLM: Amazon Rekognition Custom Labels + SageMaker Neo for edge inference.  
   * OCR+LLM: Textract → S3 → Bedrock (Claude) via Lambda orchestration.
3. **Ran A/B tests on 100k real documents** – VLM hit F1 = 0.92, OCR+LLM F1 = 0.94 but at 4× cost and 5× latency.
4. **Cost model** – VLM: $0.0006/doc (SageMaker), OCR+LLM: $0.0028/doc (Textract + Bedrock).  
5. **Risk analysis** – OCR+LLM had higher drift risk (model updates required every 3 months); VLM only needed re‑training once a year.

**Result (R)**  
We chose the **OCR+LLM stack** because it delivered the highest accuracy and could be scaled with Lambda auto‑scaling, keeping latency under 1.5 s for 95% of docs. Monthly cost dropped to $250k vs projected $400k, a 38% savings, while compliance error rate fell from 4% to 0.6%.  

**Leadership Principles Reflected**  
* **Customer Obsession** – prioritized bank’s regulatory accuracy.  
* **Ownership & Dive Deep** – built end‑to‑end metrics and cost models, learned that higher upfront accuracy can hide long‑term operational costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
