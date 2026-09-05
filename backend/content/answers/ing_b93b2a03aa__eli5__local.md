---
qid: ing_b93b2a03aa__eli5__local
question: 'Explain: SRV (Service) Record — DNS Record Types You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 265
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:30:53-05:00'
sources: []
---

Think of the Internet as a huge phone book.  
When you look up “email for example.com,” you usually get an A record that says *“the mail server lives at 192.0.2.5.”*  
An SRV (Service) record is like looking up the exact *extension and priority* in that phone book: it tells your computer **where** a particular service (like SIP for voice, XMPP for chat, or an FTP server) can be found on a domain.

In plain terms:

- **SRV** = “service locator.”  
- It lists **priority**, **weight**, and the **host/port** that runs the requested service.  
- Your software reads it first, then connects to the specified host and port instead of guessing or using defaults.

So if you ask for *“sip.example.com”*, the SRV record might point you to *sip1.example.com:5060* with priority 10; if that’s down, your client will try sip2.example.com:5060 (priority 20). It keeps services organized and flexible, just like a phone book gives you the right extension for each department.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
