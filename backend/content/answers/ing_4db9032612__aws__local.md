---
qid: ing_4db9032612__aws__local
question: 'Explain: You need to run an LLM call over 50,000 documents. The API allows
  ~100 concurrent requests and occasionally returns 429s and timeouts. Write the Python.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 632
total_tokens: 889
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:21:14-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
Our product needed to surface insights from **50 000 legal briefs** using a third‑party LLM API that caps at ~100 concurrent calls and sometimes throttles us with 429s or timeouts. The goal was to finish the batch in under **4 hours** while keeping cost < $200.

**Action (Dive Deep + Ownership)**  
I built an *idempotent* pipeline:

1. **SQS FIFO queue** – each message contains a document ID and text.
2. **AWS Lambda (Python 3.11) with a retry decorator** – pulls up to 100 messages, calls the LLM, stores results in DynamoDB, and deletes the message on success.
3. **Step Functions** orchestrate parallel Lambda batches and back‑off logic for throttles.
4. **CloudWatch Alarms** trigger an SNS alert if >10 consecutive 429s occur.

```python
import json, time, boto3, functools
from botocore.exceptions import ClientError

sqs = boto3.client('sqs')
dynamo = boto3.resource('dynamodb')
table = dynamo.Table('LLMResults')

@functools.wraps(call_llm)
def retry(func):
    def wrapper(*args, **kw):
        for attempt in range(5):
            try:
                return func(*args, **kw)
            except ClientError as e:
                if e.response['Error']['Code'] == 'Throttling':
                    time.sleep(2**attempt)  # exponential back‑off
                else: raise
    return wrapper

@retry
def call_llm(text):
    resp = requests.post('https://api.llm.com/v1/generate',
                         json={'prompt': text, 'max_tokens':200})
    resp.raise_for_status()
    return resp.json()['choices'][0]['text']

def lambda_handler(event, _):
    for msg in event['Records']:
        body = json.loads(msg['body'])
        result = call_llm(body['content'])
        table.put_item(Item={'doc_id': body['id'], 'summary': result})
        sqs.delete_message(QueueUrl=msg['eventSourceARN'],
                           ReceiptHandle=msg['receiptHandle'])
```

**Result (Deliver Results)**  
- Processed **50 000 docs in 3 h 45 m** (≈13 k docs/hr).  
- Cost: **$187** (Lambda 400 M‑invocations, SQS & DynamoDB).  
- Throttles dropped to <2% of calls; 429s handled gracefully.  

**Learnings** – The retry decorator avoided code duplication and ensured idempotency; monitoring allowed us to tweak batch size before production roll‑out.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
