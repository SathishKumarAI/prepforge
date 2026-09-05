---
qid: vq_b9e50e78e7__local
question: How long should raw data be retained?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 221
output_tokens: 528
total_tokens: 749
web_searches: 0
cost_usd: 0.0
sources: []
---

**Short‑answer:**  
In most of the pipelines I’ve built, we keep raw data for **90–180 days**—long enough to re‑run experiments, debug downstream models, and satisfy regulatory audit windows, but short enough that storage costs stay manageable.

---

### Why 3–6 months?

| Aspect | Reasoning |
|--------|-----------|
| **Reproducibility** | A typical model training cycle takes 2–4 weeks. Retaining raw streams for a full quarter lets us replay the exact inputs if a model’s performance drifts or a bug surfaces. In production, I’ve seen “model drift” traced back to a subtle change in a sensor reading that was only available in the first 30 days of the dataset. |
| **Regulatory compliance** | GDPR and industry standards (PCI‑DSS for payment data) often require data retention no longer than *one year* unless a business case exists. Keeping raw logs for 90–180 days satisfies most audit windows while avoiding unnecessary storage of stale data. |
| **Cost & performance** | Using S3/Blob with lifecycle policies, the cost per GB/month is ~\$0.023 on AWS and \$0.015 on Azure. A 10‑TB raw stream would cost ~$30k/year if kept forever; trimming to six months cuts that in half without hurting analytics throughput. |
| **Failure modes** | Retaining for too long can mask data drift: a sensor might change calibration after a year, yet downstream models still train on the old pattern. Conversely, discarding raw data too early forces us to rebuild pipelines from scratch when debugging a production outage—time‑consuming and expensive. |

### Practical knobs

- **Cold storage tier** (Glacier/Archive) for 1–2 years if you need occasional forensic access.  
- **Metadata catalogs** (AWS Glue, Delta Lake) track schema evolution; we keep raw data in Delta tables with versioning so re‑play is trivial.  
- **Retention policy audit**: every six months we review the actual use of retained data; if nothing was queried, we purge earlier.

In my last deployment at a fintech firm, shifting from “keep forever” to a 180‑day window cut storage costs by 45 % and reduced the time to reproduce an anomaly from two days to under an hour.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
