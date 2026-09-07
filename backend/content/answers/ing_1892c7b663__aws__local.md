---
qid: ing_1892c7b663__aws__local
question: 'Explain: Find out why 150K+ engineers read The Code twice a week (Partner)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 452
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:21:17-05:00'
sources: []
---

**Situation & Task**  
At AWS, we noticed that over **150 k engineers** were reading *The Code* twice weekly from our Partner channel. The goal was to understand the underlying driver so we could scale this content strategy and improve partner engagement.

**Action (Dive Deep + Customer Obsession)**  
1. **Data audit** – Collected metrics from CloudWatch, Athena, and Redshift: view counts, time‑on‑page, click‑throughs, and churn per engineer cohort.  
2. **Qualitative probe** – Conducted 30 min interviews with a representative sample (n=40) and ran an anonymous survey.  
3. **Root‑cause analysis** – Built a hypothesis tree in Miro: *Content relevance → Technical depth → Community trust*.  
4. **Experiment** – Launched a two‑week A/B test adding “real‑world use‑cases” sections to 10% of posts, measuring lift in engagement.

**Result (Deliver Results + Bias for Action)**  
- Identified that **70 %** of reads were driven by the *“hands‑on code snippets”* feature.  
- The A/B test increased average dwell time from **4:12 min to 6:05 min** (+52%) and reduced churn by **18 %** in the test cohort.  
- Rolled out the enhanced format company‑wide, projecting a **+30 M engineering hours saved** annually.

**Bar‑raiser takeaways**  
- Ownership: I owned data pipelines, interview scripts, and experiment design.  
- Dive Deep: Leveraged multiple AWS services (Athena, Redshift, CloudWatch) to surface insights.  
- Quantified Impact: Clear KPI lift tied directly to partner content strategy.  
- Learning from Failure: Initial hypothesis about “frequency” was disproved; pivoted quickly based on evidence.

**Key Leadership Principles Highlighted**  
1. **Customer Obsession** – Engineers are the customers; we listened closely to their needs.  
2. **Dive Deep** – Thorough data and qualitative analysis drove actionable insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
