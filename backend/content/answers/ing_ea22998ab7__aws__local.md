---
qid: ing_ea22998ab7__aws__local
question: 'Explain: Attributability as a Compliance Primitive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 628
total_tokens: 856
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:07:41-05:00'
sources: []
---

**Attributability as a Compliance Primitive**

*Leadership Principles:* **Customer Obsession & Ownership** – we must give our clients undeniable proof that every AI inference can be traced back to its source data and model version.

### Behavioral (STAR)

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| A fintech client needed GDPR‑compliant audit trails for ML‑generated credit scores. | Build an end‑to‑end attributability layer that logs every inference input, feature vector, and model version in a tamper‑proof store. | • Created a Lambda pipeline that stamps each request with `X‑Request‑ID`, stores payloads in S3 (server‑side encryption), and writes metadata to DynamoDB using conditional writes.<br>• Enabled CloudTrail event selectors on the S3 bucket for immutable audit logs.<br>• Added a KMS key rotation policy and integrated AWS Config rules. | 100 % compliance passed a third‑party SOC 2 audit; latency added <5 ms per inference, cost <$0.02/lookup, and storage savings of 30 % via S3 Intelligent‑Tiering. |

### Technical Design

- **Requirements:** Immutable lineage, low‑latency lookup, GDPR “right to explanation.”
- **Solution Stack:**
  - **API Gateway + Lambda** – receives inference requests, tags them.
  - **S3 (Object Lock)** – stores raw payloads; Object Lock + Glacier Deep Archive for long‑term retention.
  - **DynamoDB Global Table** – indexes by `RequestID` and `ModelVersion`; conditional writes prevent tampering.
  - **KMS** – encrypt all data at rest, with key rotation policy.
  - **CloudTrail & Config** – audit trail of every API call; compliance rules enforce S3 bucket policies.
- **Scalability/Availability:** Lambda scales to millions of requests per second; DynamoDB partitions by `RequestID`; S3 offers 99.999999999% durability.
- **Cost Trade‑offs:** Using S3 Intelligent‑Tiering keeps storage costs low while satisfying regulatory retention periods.

### Bar‑raiser Lens

- **Ownership**: Took full responsibility from design to audit acceptance.  
- **Dive Deep**: Leveraged CloudTrail and Config for granular compliance checks.  
- **Quantified Impact**: 100 % audit pass, <5 ms overhead, $0.02/lookup.  
- **Learning from Failure**: Initial design omitted S3 Object Lock; after a data‑corruption incident, I added immutable storage to prevent rollback attacks.

*Result:* The client can now prove compliance in real time, giving them confidence and freeing us to focus on new ML features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
