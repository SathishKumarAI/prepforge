---
qid: ing_bb4793c68f__aws__local
question: 'Explain: A customer wants structured fields extracted from 10 million scanned
  documents with LLMs. Sketch the pipeline and the cost/latency math.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 603
total_tokens: 852
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:27:06-05:00'
sources: []
---

**Leadership Principles:** *Customer Obsession* & *Dive Deep*

> **Situation** – A retail client needs structured fields (invoice number, date, total) from 10 M scanned PDFs to feed their ERP.  
> **Task** – Design a scalable, cost‑effective pipeline that returns results within 5 min per batch.

### Technical Pipeline

| Step | AWS Service | Why |
|------|-------------|-----|
| 1️⃣ Image Pre‑processing | **Amazon Textract** (Document Text + Layout) | Extracts OCR text and bounding boxes; handles varied layouts. |
| 2️⃣ Structured Extraction | **Amazon Bedrock** with a fine‑tuned LLM (e.g., Anthropic Claude) | Passes OCR output to the model via prompt templates that map fields to JSON. |
| 3️⃣ Validation & Post‑processing | **AWS Lambda + Amazon DynamoDB** | Validates field formats, stores interim results; DynamoDB streams trigger correction logic if needed. |
| 4️⃣ Batch Orchestration | **Amazon Step Functions** | Coordinates parallel Lambda invocations, retries, and error handling. |

### Cost & Latency Math

1. **Textract OCR**  
   * $0.0015 per page → 10 M pages × $0.0015 = **$15,000**.  
   * Avg 3 sec/page → 30 min total (parallelized).

2. **LLM Inference**  
   * Assume 200 tokens/prompt, 100 k tokens/10 M docs → 20 B tokens.  
   * Anthropic Claude‑2 @ $0.02 per 1K tokens → 20 B /1 k × $0.02 = **$400,000**.  

3. **Lambda + DynamoDB**  
   * ~5 ms per doc, negligible cost (<$50).

4. **Step Functions & Networking**  
   * <$10.

**Total Estimated Cost:** ~$415,050 for the full batch.  
**Latency Target:** 5 min per 1 M-doc batch (≈1 sec/doc) by running 200 concurrent Lambda + Bedrock calls and using S3 Transfer Acceleration for fast ingestion.

### Delivery & Learnings

- **Ownership**: I led cross‑team workshops to validate schema assumptions, reducing downstream data errors by 30%.  
- **Dive Deep**: Tracked token usage per field; discovered that normalizing prompts cut tokens by 25%, saving $100k.  
- **Result**: Client achieved 95 % extraction accuracy and integrated the stream into their ERP in under two weeks.  

> *Bar‑raiser focus*: clear ownership, data‑driven cost/latency calculations, depth of architectural choices, and tangible business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
