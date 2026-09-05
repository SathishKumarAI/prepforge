---
qid: ing_5b8b851700__star__local
question: 'Explain: Files in This Folder — Interview Prep'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 356
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:30:28-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with revamping the “Interview Prep” module of our learning platform, which currently stored all practice files in a single, unstructured bucket. Users were reporting slow search times and difficulty locating relevant resources for specific interview topics.

**Task:**  
I needed to redesign the file storage architecture so that users could instantly retrieve topic‑specific documents, reduce load times by at least 30 %, and enable automated tagging for future AI‑driven recommendations.

**Action:**  
I introduced a hierarchical folder structure in Amazon S3 based on interview domains (e.g., “Algorithms → Graphs”, “System Design → Scalability”). I then built an ETL pipeline using AWS Glue that scanned each file, extracted metadata with Textract, and populated a DynamoDB index keyed by topic tags. On the front end, I replaced the flat list with a React component that queried DynamoDB via API Gateway, returning paginated results in milliseconds. To ensure consistency, I added a CI/CD step that validated folder naming against our schema before deployment.

**Result:**  
Search latency dropped from 4 seconds to under 500 ms for any query, and user engagement on the module increased by 42 % over three months. The new structure also freed up 25 % of our S3 storage costs due to more efficient compression of similar files. I learned that thoughtful data modeling can dramatically improve both performance and developer experience in AI‑enhanced platforms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
