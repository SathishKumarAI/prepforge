---
qid: ing_879b9dfbf9__aws__local
question: 'Explain: The Interview Question — Compliance Automation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 393
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:30:48-05:00'
sources: []
---

**Compliance Automation – a customer‑obsessed, data‑driven solution**

*Situation:* In my last role at a fintech firm we were required to meet SOC 2 and GDPR but manual audits cost **$120K annually** and risked 3‑month downtimes during reviews.  
*Task:* Build an automated compliance engine that reduced audit time from weeks to days while guaranteeing zero false negatives.  

*Action:* I led a cross‑functional squad and designed a serverless pipeline:  
- **AWS Config** + **GuardDuty** for continuous rule evaluation, feeding into **Amazon EventBridge**.  
- Each trigger invoked a **Lambda** that updated an **Aurora Serverless v2** audit log and generated a signed PDF via **AWS SDK for S3** (audit evidence).  
- We used **Step Functions** to orchestrate multi‑step remediation (e.g., auto‑removing non‑compliant IAM policies).  
- Cost was capped at **$3K/month**, 99.99 % availability, and latency <2 s per check.  

*Result:* Audit duration dropped from **42 days → 4 days**; compliance coverage rose to **100 %** with zero false positives, saving **$115K/year** and freeing the security team for proactive risk work.  

**Leadership Principles:**  
- *Customer Obsession*: Delivered a faster, reliable audit experience for internal stakeholders.  
- *Ownership & Dive Deep*: Built from scratch, iterated on metrics, and continuously refined rules based on incident data.  

Bar‑raisers look for clear ownership, measurable impact, deep technical justification, and learning—my solution demonstrates all three.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
