---
qid: ing_bd35eb2a52__faang__local
question: 'Explain: Contact management — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 445
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:02:29-05:00'
sources: []
---

**Clarify**  
We’re building a “Contact Management” feature that lets developers (or end‑users) **resend an email** to a contact who didn’t receive or opened the original message. Key assumptions:  

1. Emails are stored in a relational table (`emails`) with status flags (sent, delivered, opened).  
2. Each contact has a unique `contact_id`.  
3. We must avoid spamming—limit retries and respect opt‑out lists.  

**Approach**  
1. **Identify eligible emails**: query the `emails` table for rows where `status='delivered'` but `opened_at IS NULL` and `retry_count < MAX_RETRIES`.  
2. **Rate‑limit per contact**: maintain a cache (e.g., Redis) keyed by `contact_id` to enforce a cooldown period between resends.  
3. **Trigger resend**: invoke the mail service API, increment `retry_count`, log the event.  
4. **Feedback loop**: update status on success/failure; if failure persists beyond `MAX_RETRIES`, flag for manual review.  

**Depth**  
- Complexity: O(1) per resend after index look‑ups; batch processing runs in O(n log n) with n eligible emails.  
- Trade‑offs: Using a cache reduces DB load but adds consistency risk; we reconcile on each retry.  
- Security: ensure no PII leaks via logs; encrypt email bodies at rest.  

**Edge Cases**  
- Contact unsubscribed → skip resend, mark `status='unsubscribed'`.  
- Network outage during API call → rollback transaction, retry later.  
- Duplicate resends due to race conditions → use optimistic locking on `retry_count`.  

**Optimize & Communicate**  
Future improvements: implement machine‑learning scoring to prioritize contacts with higher engagement probability; add A/B testing of subject lines. I’d present this flow diagrammatically in a whiteboard session, walking interviewers through each decision point and its rationale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
