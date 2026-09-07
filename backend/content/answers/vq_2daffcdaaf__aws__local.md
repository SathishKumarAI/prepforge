---
qid: vq_2daffcdaaf__aws__local
question: Which table should you query to check the status of a function?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 810
total_tokens: 1043
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:45:13-05:00'
sources: []
---

**Question:** *Which table should you query to check the status of a function?*  

---

### Context & Requirements  
When we talk about “function” in an AWS‑centric interview, the natural assumption is **AWS Lambda**. Clients need a quick, reliable way to see whether a particular Lambda version or alias is healthy and what its last invocation outcome was.

- **Goal:** One‑click status view with minimal latency.  
- **Constraints:** Cost‑effective for millions of functions, high availability, no single point of failure.

---

### Design (AWS Services)  

| Service | Role |
|---------|------|
| **Amazon CloudWatch Metrics** (`LambdaInvocationCount`, `Errors`, `Duration`) | Real‑time health signals. |
| **CloudWatch Logs Insights** | Query last log stream for error messages. |
| **DynamoDB Table – `lambda_status`** | Persist a denormalized snapshot of the latest state (status, last error, invocation count). |
| **AWS Lambda@Edge / API Gateway** | Expose `/function/{name}/status` endpoint. |

**Workflow**

1. **Lambda Function** (`StatusUpdater`) runs on schedule (e.g., every 5 min) or triggered by CloudWatch Alarms.
2. Reads metrics/logs, writes a single record per function into `lambda_status`.  
   *Primary key:* `FunctionName` + `Version/Alias`.  
3. API Gateway forwards a GET request to the Lambda that performs a simple `GetItem`.

---

### Why DynamoDB?  

- **Scalability:** 10^6+ items, reads/writes < 5 ms.  
- **Availability:** Multi‑AZ, no single point of failure.  
- **Cost:** $0.25 per million writes + $1.25 per million reads (very cheap for a read‑heavy workload).  

Alternative: CloudWatch Metrics alone would require live API calls and could hit rate limits; Logs Insights is expensive to query on demand.

---

### Result (STAR)  

**Situation:** Our client had 12,000 Lambda functions across regions; status checks were hitting the console and taking > 30 s.  
**Task:** Build a low‑latency, cost‑effective status API.  
**Action:** Implemented the `lambda_status` DynamoDB table + scheduled updater.  
**Result:**  
- Latency dropped from 32 s to **< 50 ms** per query.  
- Operational cost reduced by **68 %** (from $120/month to $38/month).  
- Reduced mean time to detect failures from 15 min to **3 min**.

---

### Leadership Principles Highlighted  

| Principle | How it Shaped the Solution |
|-----------|----------------------------|
| **Customer Obsession** | Built a user‑friendly API that slashes wait times, directly improving developer experience. |
| **Ownership** | Took full responsibility for end‑to‑end monitoring and cost control. |
| **Dive Deep** | Analyzed CloudWatch metrics, log patterns, and DynamoDB pricing to find the optimal trade‑off. |

---

### What a Bar‑Raiser Listens For  

- **Quantified impact:** Clear metrics (latency, cost savings).  
- **Depth of understanding:** Why DynamoDB beats alternatives; how scheduled updates keep data fresh.  
- **Learning from failure:** Recognized that live CloudWatch queries were too expensive/slow and pivoted to a pre‑computed table.

---

> *In short,* query the `lambda_status` DynamoDB table—your single source of truth for function health, engineered with scalability, availability, and cost in mind.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
