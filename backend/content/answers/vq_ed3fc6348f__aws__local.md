---
qid: vq_ed3fc6348f__aws__local
question: What are all different types of collation sensitivity?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 484
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:21:32-05:00'
sources: []
---

**Situation / Task**  
While redesigning our global data lake on **AWS Glue & Redshift**, I discovered that inconsistent string sorting caused duplicate user‑segment reports across regions. The team needed a clear taxonomy of *collation sensitivity* to standardize the ETL pipeline.

**Action (Technical)**  
I mapped out the four primary collation types and built a reference table in DynamoDB (`CollationType{Locale, Strength, CaseSensitivity, AccentSensitivity}`) that Glue jobs queried at runtime.  
| Sensitivity | Meaning | Example | AWS Service Used |
|-------------|---------|---------|------------------|
| **Case‑insensitive** | Ignores upper/lower case differences | `a` = `A` | Redshift `ILIKE`, S3 Select |
| **Accent‑insensitive** | Ignores diacritics | `e` = `é` | Athena UDF, Glue Python |
| **Case‑sensitive** | Distinguishes case | `a` ≠ `A` | Redshift default |
| **Accent‑sensitive** | Distinguishes accents | `e` ≠ `é` | Redshift default |

I implemented a *collation selector* in the Glue job script that sets Redshift’s `SET lc_collate = ...` per locale, ensuring deterministic ordering and joins. I also added unit tests that seed sample data and assert expected row counts.

**Result (Data‑driven)**  
After rollout:  
- **Duplicate segment rows dropped from 18 % to <1 %** in nightly reports.  
- Query latency on Redshift reduced by **22 %** due to fewer sort operations.  
- Cost savings of ~$3k/month on compute time.

**Reflection (Bar‑raiser)**  
Ownership: I owned the entire feature from spec to production. Dive deep: I wrote and reviewed SQL, Glue scripts, and UDFs, validating with real datasets. Quantified impact: 18 % reduction in duplicates directly increased campaign ROI by ~5%. Learned that a single mis‑configured collation can ripple through downstream analytics; future teams will use the DynamoDB reference to avoid regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
