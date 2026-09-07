---
qid: ing_50023b0c8c__faang__local
question: 'Explain: Users-Table — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 737
total_tokens: 974
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:50:30-05:00'
sources: []
---

**Clarify**  
We’re asked to describe the *Users* table schema for a URL‑shortening service (e.g., TinyURL). The goal is to capture who can create, manage, and view statistics on shortened URLs while supporting scaling, security, and analytics.

**Assumptions**  
- Users may be anonymous or authenticated.  
- Each user can own multiple short links.  
- We need auditability (creation time, last login) and basic privacy controls.  
- The system must support millions of users with high read/write throughput.

---

## Approach

1. **Core fields** – unique ID, email/username, hashed password.  
2. **Audit fields** – `created_at`, `updated_at`, `last_login`.  
3. **Profile & limits** – `plan_type`, `link_quota_used`, `quota_limit`.  
4. **Security** – `email_verified`, `two_factor_enabled`.  
5. **Analytics hook** – `referral_id` for traffic attribution.

---

## Depth

| Column | Type | Notes |
|--------|------|-------|
| `user_id` | UUID (PK) | Immutable, indexed. |
| `username` | varchar(30) | Unique, indexed. |
| `email` | varchar(255) | Unique, used for login & notifications. |
| `password_hash` | bytea | Salted bcrypt/argon2. |
| `plan_type` | enum('free','pro','enterprise') | Determines quota and feature set. |
| `link_quota_used` | int | Current count of active short URLs. |
| `quota_limit` | int | Max allowed (depends on plan). |
| `email_verified` | boolean | Prevents abuse. |
| `two_factor_enabled` | boolean | Optional MFA flag. |
| `created_at`, `updated_at` | timestamptz | For auditing and TTL logic. |
| `last_login` | timestamptz | Session hygiene, analytics. |
| `referral_id` | UUID (FK to Users) | Tracks referral traffic. |

**Indexes**: PK on `user_id`; unique indexes on `username`, `email`. Secondary index on `plan_type` for quota enforcement queries.

**Trade‑offs**  
- Storing `link_quota_used` denormalizes data but speeds quota checks; we must update atomically with link creation/deletion.  
- Using UUIDs avoids ID collisions in a sharded environment.  

---

## Edge Cases

| Scenario | What can break? | Test |
|----------|-----------------|------|
| User deletes account while links are active | `link_quota_used` may become stale | Simulate deletion + link count verification. |
| Concurrent link creation > quota | Race condition | Stress‑test with parallel inserts and atomic decrement. |
| Password reset race | Duplicate tokens | Ensure token table has unique constraint on user_id+token. |

---

## Optimize & Communicate

- **Batch updates**: use `UPDATE ... WHERE user_id = ?` with optimistic locking (`updated_at`).  
- **Cache hot users** in Redis for quick quota checks.  
- **Explain to interviewers** that the schema balances normalization (auditability) with denormalization (quota speed), scales horizontally via UUIDs, and is protected against common race conditions.

*Word count: ~200 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
