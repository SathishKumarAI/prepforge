---
qid: ing_2dbb0cc437__think__local
question: 'Explain: Facebook Newsfeed — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 501
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:40:32-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   * Ask whether you need a full‑blown architecture or just a high‑level cheat sheet.  
   * Assume Facebook’s traffic (≈ 10 B daily active users), global distribution, and real‑time relevance requirements.  
   * Note that “cheat sheet” implies concise bullet points rather than exhaustive diagrams.

**2. Adopt a design framework**  
   * **Requirements** → functional (feed ranking, personalization) & non‑functional (latency < 100 ms, 99.9% availability).  
   * **Data flow** → user actions → ingestion → processing → storage → serving.  
   * **Key subsystems**: ingestion pipeline, graph store, recommendation engine, caching layer, CDN, A/B testing, monitoring.

**3. Reason step‑by‑step toward the cheat sheet**  
   1. Map out a basic data path (user → API gateway → ingest service).  
   2. Identify storage needs: short‑term queue (Kafka), long‑term graph DB (Neo4j/JanusGraph), and hot cache (Redis).  
   3. Outline the ranking pipeline: feature extraction → model inference → score aggregation.  
   4. Add edge considerations: personalization, freshness vs. relevance trade‑offs, throttling for viral posts.  
   5. Summarize monitoring & scaling knobs (auto‑scaling pods, sharding by user hash).

**4. Avoid common traps**  
   * Don’t get lost in implementation details—focus on high‑level services.  
   * Avoid assuming a single monolithic database; Facebook uses multiple specialized stores.  
   * Skip the “perfect” algorithm; mention that models are continually retrained with online learning.  
   * Beware of over‑engineering: keep the cheat sheet readable, not exhaustive.

**5. Sanity‑check & articulate clearly**  
   * Run through a sample user request mentally to ensure every component is represented.  
   * Check latency budgets against each hop; if any step exceeds the budget, note it as a scaling point.  
   * Present the final cheat sheet in bullet form with icons or simple diagrams so interviewers can grasp the flow instantly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
