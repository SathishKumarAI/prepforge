---
qid: ing_5173448b71__faang__local
question: Design a pipeline that turns ~100k hours per month of call recordings into
  searchable, analysable data. What are the stages and where does it go wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 507
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:53:51-05:00'
sources: []
---

**1️⃣ Clarify**  
You want a production‑ready pipeline that ingests ~100 k hrs/month of audio, converts it to searchable text, and surfaces analytics (sentiment, intent, KPI). Assume the recordings are in varied formats, may contain background noise, multiple speakers, and privacy constraints. We’ll also need real‑time indexing for search and batch analytics for reporting.

**2️⃣ Approach**  
1. Ingestion & normalization → 2. ASR & speaker diarization → 3. Text enrichment (NLP) → 4. Storage & indexing → 5. Analytics & dashboards.  

**3️⃣ Depth**  
- **Ingestion**: Use a message queue (Kafka) to decouple upload from processing; store raw files in S3 with metadata tags.  
- **ASR**: Deploy a hybrid model—open‑source Whisper for baseline accuracy, fine‑tuned on domain data, backed by an optional paid cloud ASR for high‑accuracy segments. Add speaker diarization (pyannote) to tag turns.  
- **Enrichment**: Run spaCy/NLTK pipelines for entities, sentiment, intent; embed with sentence transformers for semantic search.  
- **Storage**: Persist transcripts in a columnar DB (Redshift/BigQuery) and index vectors in Elasticsearch or Pinecone for similarity search.  
- **Analytics**: Batch jobs (Airflow) compute KPI trends; real‑time alerts via Kafka Streams.  

Complexities: ~O(N log N) indexing, O(1) lookup per query. Trade‑offs: open‑source models reduce cost but may lag on accents; paid ASR boosts accuracy at higher latency.

**4️⃣ Edge Cases**  
- Noisy or overlapping speech → drop‑out or mis‑diarization.  
- Multilingual content → fallback to language detection and appropriate model.  
- GDPR/PII: need automated redaction before indexing.  
- Scaling spikes during live events → auto‑scale workers.

**5️⃣ Optimize & Communicate**  
Start with a pilot on 1 % data, instrument latency metrics, then add caching layers (Redis) for hot queries. Explain to interviewers that each stage is modular, observability‑driven, and designed for incremental rollouts—key for FAANG‑style reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
