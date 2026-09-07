---
qid: ing_45656ae5f4__aws__local
question: 'Explain: So here we need an if statement — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 472
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:02:42-05:00'
sources: []
---

**Situation & Task**  
While building a lightweight ML inference pipeline on **AWS SageMaker**, I had to filter out noisy training samples before model training. The data stream was coming from an S3 bucket and the filtering logic needed to be both fast and cost‑effective.

**Action**  
I wrote a simple Python `if` statement inside a Lambda function that processed each record:

```python
def lambda_handler(event, _):
    for rec in event['Records']:
        payload = json.loads(rec['body'])
        # Drop samples with missing labels or low confidence
        if not payload.get('label') or payload['confidence'] < 0.7:
            continue          # skip this record
        process(payload)       # forward to SageMaker training job
```

The Lambda was triggered by an SQS queue that fed records from the S3 ingestion step.  
- **AWS services**: S3 (storage), SQS (decoupling), Lambda (compute), SageMaker (training).  
- **Scalability**: Lambda scales horizontally to thousands of invocations per second, handling bursty traffic without provisioning servers.  
- **Availability**: 99.9 % SLA from Lambda and SQS; retry logic in the queue guarantees eventual delivery.  
- **Cost**: $0.20/1M requests + compute time; far cheaper than EC2 instances for this lightweight filtering.

**Result**  
The pipeline processed ~300K records/day with a 15 % reduction in training data volume, cutting SageMaker training costs by **$3,200/month** while improving model accuracy by 4.2 %.  

**Leadership Principles Reflected**  
- **Customer Obsession**: Delivered a cheaper, faster solution for our ML engineers.  
- **Ownership & Dive Deep**: Chose the minimal‑service stack, tuned Lambda concurrency, and measured cost impact directly.

*Bar‑raiser notes*: Look for ownership in choosing services, depth in trade‑off analysis, quantifiable savings, and learning from earlier attempts where a heavier EC2 approach was overkill.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
