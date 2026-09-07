---
qid: vq_1bd5840e9e__aws__local
question: How to write a UDF in hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 413
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:41:17-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At my previous company we migrated 4 TB of log data from on‑prem Hadoop to Amazon EMR for real‑time analytics. The BI team needed a custom UDF to normalize user agent strings into device categories, but the existing Hive UDF library had no support for complex regex parsing.

**Action (Dive Deep + Bias for Action)**  
I first profiled 200 GB of sample data to understand the distribution of user agents. I wrote a Java UDF (`DeviceCategoryUDF`) that used the `user-agent-utils` library, compiled it into a JAR, and registered it in Hive with `ADD JAR`. In EMR’s `hive-site.xml` I set `hive.execution.engine=tez` to leverage Tez for parallelism.  
To make the UDF reusable across clusters, I pushed the JAR to an S3 bucket (`s3://my‑company/udfs/device-category.jar`) and added a CloudFormation custom resource that automatically updates the EMR cluster’s `--bootstrap-actions` to download the JAR at launch.

**Result (Deliver Results + Data‑Driven)**  
The UDF cut query runtime from 12 min to 1.5 min on average, reducing EMR spot‑instance cost by **18 %** ($3k/month). The BI team reported higher data quality scores (from 72 % to 94 %) and could publish dashboards 2× faster.

**Bar‑raiser Takeaways**  
- Demonstrated ownership by automating the deployment pipeline.  
- Dive deep into profiling before coding, ensuring optimal regex patterns.  
- Quantified impact with clear cost and performance metrics.  
- Learned from an initial failure where missing `user-agent-utils` caused a runtime exception; fixed it by adding a dependency check in the UDF constructor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
