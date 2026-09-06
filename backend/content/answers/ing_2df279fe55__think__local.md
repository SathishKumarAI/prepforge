---
qid: ing_2df279fe55__think__local
question: Design the SLOs for a new LLM-powered feature. What do you promise, and
  how do you measure it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 438
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:41:54-05:00'
sources: []
---

**1️⃣ Clarify Scope & Assumptions**  
   • Identify the concrete feature (e.g., chat assistant, code generation).  
   • Assume a target user base, traffic patterns, and criticality level.  
   • Decide whether SLOs will cover latency, accuracy, availability, or a mix.

**2️⃣ Choose an Appropriate Framework**  
   • Use *SLA → SLIs → SLOs* hierarchy: define the *Service Level Agreement* (what we promise), then *Service Level Indicators* (metrics that reflect it), and finally *Service Level Objectives* (numeric targets).  
   • Apply the *Four Pillars of Reliability*: latency, availability, error rate, consistency.

**3️⃣ Step‑by‑Step Reasoning**  
   1. List all user‑facing outcomes (response time, correctness, hallucination rate).  
   2. For each outcome, pick a measurable indicator (e.g., 95th percentile response latency, BLEU score for translation).  
   3. Set realistic thresholds based on baseline experiments and business impact.  
   4. Define acceptable degradation windows (e.g., no more than 1 % of requests exceed 2 s in any 5‑min window).  
   5. Draft monitoring dashboards, alerting rules, and incident SLIs.

**4️⃣ Avoid Common Pitfalls**  
   • Don’t mix *availability* with *accuracy*: a highly available model that constantly hallucinate is still bad.  
   • Beware of “metric‑only” promises—ensure SLOs map to real user experience.  
   • Resist over‑engineering: start simple, iterate with data.

**5️⃣ Sanity‑Check & Communicate**  
   • Validate targets against historical data and stakeholder expectations.  
   • Run a pilot test; if metrics drift, revisit the SLIs.  
   • Present the SLOs in plain language to product teams, emphasizing how each metric protects user value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
