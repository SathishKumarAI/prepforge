---
qid: ing_127f9fa03b__faang__local
question: 'Explain: Custom email regex — Release notes | Zod'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 712
total_tokens: 946
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:26:46-05:00'
sources: []
---

**Clarify**

You’re asked to build a *custom email validator* that satisfies the “release‑notes” format used by **Zod**, a TypeScript schema library.  
Assumptions:  

- Only ASCII characters are allowed (no Unicode).  
- The local part may contain letters, digits, `._%+-`, but not consecutive dots or leading/trailing dots.  
- The domain consists of labels separated by dots; each label starts and ends with a letter/digit and may contain hyphens.  
- Top‑level domain is at least two letters.  

**Approach**

1. Split the string on `@`.  
2. Validate the local part with a regex that forbids double dots and dot at edges.  
3. Validate the domain by splitting on `.` and checking each label against `[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?`.  
4. Ensure TLD length ≥ 2.

**Depth**

```ts
function isValidZodEmail(email: string): boolean {
  const [local, domain] = email.split('@');
  if (!local || !domain) return false;

  // local part rules
  const localRe = /^[A-Za-z0-9]+(?:[._%+-][A-Za-z0-9]+)*$/;
  if (!localRe.test(local)) return false;

  const labels = domain.split('.');
  if (labels.length < 2) return false;               // need a TLD
  for (const label of labels) {
    if (!/^[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/.test(label))
      return false;
  }
  const tld = labels[labels.length - 1];
  if (tld.length < 2) return false;

  return true;
}
```

Time: **O(n)**, space: **O(1)**.  
Trade‑offs: We avoid a monolithic regex for readability and easier maintenance; we also guard against edge cases like `..` or `-.`.

**Edge Cases**

- Empty string, missing `@`, multiple `@`.  
- Consecutive dots in local part (`user..name`).  
- Leading/trailing dot in local part (`.user`).  
- Domain labels starting/ending with hyphen (`ex-ample.com`).  
- TLD too short (`a@b.c`).

**Optimize & Communicate**

If performance becomes critical, replace the split‑and‑loop with a single regex:  

```ts
const emailRe = /^[A-Za-z0-9]+(?:[._%+-][A-Za-z0-9]+)*@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$/;
```

But I’d keep the modular approach for clarity, especially in a code‑review setting.  
Explain the design decisions, test coverage (unit tests for all edge cases), and how this aligns with Zod’s philosophy of explicit, maintainable schemas.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
