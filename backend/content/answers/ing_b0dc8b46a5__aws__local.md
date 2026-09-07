---
qid: ing_b0dc8b46a5__aws__local
question: 'Explain: Text normalisation is where TTS quality actually dies in production.
  Walk me through it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 631
total_tokens: 870
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:05:03-05:00'
sources: []
---

**Situation & Task**  
At my previous role we launched a voice‑assist product that needed to speak user‑generated text (product reviews, FAQs). During beta testing we observed a sharp drop in intelligibility—users complained “the TTS sounded garbled.” The root cause was **text normalisation**: the pipeline wasn’t converting informal or noisy input into clean phonetic representations before feeding it to the neural TTS engine.

**Action – Design & Execution**  
1. **Requirements & Scope**  
   * Process 10 M+ user sentences per day.  
   * Maintain < 50 ms latency for real‑time requests.  
   * Reduce error rate (mispronunciations) by ≥ 80 %.  

2. **Solution Architecture**  
   * **Lambda + Step Functions** – lightweight, serverless microservice that receives raw text, applies regex & dictionary lookups, and returns a normalized string.  
   * **Amazon DynamoDB** – stores custom abbreviation/emoji mappings with TTL for quick reads (≤ 1 ms).  
   * **AWS Comprehend Custom Entities** – extracts domain‑specific entities to apply context‑aware rules.  
   * **S3 + CloudFront** – cache normalized results for repeated requests, cutting downstream load.  

3. **Scalability & Availability**  
   * Auto‑scaling Lambda (max 10 k concurrent invocations) guarantees 99.9 % availability.  
   * DynamoDB’s provisioned throughput (200 RCUs/WCU) scales linearly; we added on‑demand capacity for traffic spikes.  

4. **Cost & Trade‑offs**  
   * Serverless reduces idle cost; estimated $0.02 per million requests vs. $5/month for a dedicated EC2 cluster.  
   * The trade‑off is higher cold‑start latency, mitigated by warming via scheduled Lambda invocations.

**Result**  
After deployment:  

| Metric | Pre‑fix | Post‑fix |
|--------|---------|----------|
| Mispronunciation rate | 27 % | **4.2 %** (↑ 85 %) |
| Average latency | 110 ms | **48 ms** |
| Monthly ops cost | $5,200 | **$1,300** |

User satisfaction scores rose from 3.6 to 4.7/5.

**Reflection & Learning**  
*Ownership*: I owned the end‑to‑end pipeline and drove cross‑team alignment.  
*Dive Deep*: We uncovered that even minor emoji handling caused > 60 % of errors.  
*Bias for Action*: Built a quick Lambda prototype, iterated with real data in 48 h.  

This experience reinforced that robust text normalisation is critical—without it, TTS quality collapses, directly impacting user trust and product credibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
