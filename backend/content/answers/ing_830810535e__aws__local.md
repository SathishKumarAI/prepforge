---
qid: ing_830810535e__aws__local
question: 'Explain: Streaming summarisation within token limits'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 413
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:21:03-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a feature to deliver real‑time meeting transcripts for an enterprise video platform. The challenge was summarising long streams (up to 2 hrs) into concise bullets while staying within the GPT‑4 token limit (~32K tokens).  

**Action**  
1. **Chunking & Sliding Window** – split audio into 5‑minute chunks, convert each to text via Whisper, and run a lightweight TF‑IDF summariser locally.  
2. **Hierarchical Summaries** – feed the chunk summaries into GPT‑4 (max 12K tokens) to produce a final executive summary.  
3. **AWS Glue & Lambda** orchestrated the pipeline; S3 stored raw audio and intermediate text; DynamoDB held metadata.  
4. **Cost optimisation** – used on‑demand Lambda for inference, but scheduled reserved capacity during peak hours, cutting costs 35 %.  

**Result**  
- Average latency from upload to summary: **12 s** (vs 45 s baseline).  
- Accuracy (ROUGE‑L) improved from 0.52 to **0.68**.  
- User engagement on the platform rose by **18 %** in the first quarter post‑launch.  

**Leadership Principles**  
*Customer Obsession*: we built a feature that cut users’ review time by half, directly addressing their pain point.  
*Dive Deep*: I dissected token budgets, engineered chunking logic, and tuned AWS resource allocation to balance speed, cost, and reliability.  

Bar‑raiser focus: ownership of the end‑to‑end pipeline, depth in token economics, measurable lift in user metrics, and a quick rollback plan that surfaced during early tests (we switched back to GPT‑3.5 for cost spikes).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
