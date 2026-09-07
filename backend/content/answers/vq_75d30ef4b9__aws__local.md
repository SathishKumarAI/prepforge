---
qid: vq_75d30ef4b9__aws__local
question: Why does this command fail when executed?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 495
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:58:24-05:00'
sources: []
---

**Situation & Task**  
While migrating a legacy data‑pipeline from on‑prem to **Amazon EMR**, I ran the following shell command in the driver node’s `/usr/lib/hadoop/bin/` directory:

```bash
$ /usr/lib/hadoop/bin/hdfs dfs -ls /user/data/input
```

The job failed with `Permission denied: user not allowed to list /user/data/input`.  
My goal was to diagnose why the EMR step couldn’t read the HDFS path and fix it so that the downstream Spark job could run within the 4‑hour window for our nightly ETL.

**Action (Dive Deep & Ownership)**  
1. **Verify Kerberos tickets** – ran `klist`; the ticket had expired, so the driver was authenticated as a guest user.  
2. **Check ACLs on HDFS** – executed `hdfs dfs -getfacl /user/data/input` and discovered only the original admin had read/write rights.  
3. **Update EMR cluster configuration** – added the Spark step’s IAM role (`EMR_EC2_DefaultRole`) to the Hadoop security policy and granted it `READ` ACL on `/user/data/input`.  
4. **Automate with CloudFormation** – created a stack that injects the proper ACLs at launch, eliminating manual touch‑points.

**Result (Deliver Results)**  
- The ETL job now completes in 45 minutes instead of timing out after 3 hours.  
- Cost savings: avoided an extra EMR cluster run (~$30).  
- Reduced failure rate from **15% to <1%** for HDFS‑access errors across the pipeline.

**Bar‑raiser notes I hit**  
- *Ownership*: Took full responsibility, even though it was a downstream team’s data.  
- *Dive Deep*: Traced Kerberos, ACLs, IAM roles—no “quick fix” allowed.  
- *Quantified Impact*: 75 % faster runtime and $30/cluster saved.  
- *Learning from Failure*: Documented the root cause in Confluence; now every new EMR cluster includes the ACL step by default.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
