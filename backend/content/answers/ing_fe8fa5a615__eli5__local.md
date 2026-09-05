---
qid: ing_fe8fa5a615__eli5__local
question: 'Explain: Computer networking — Technical interviewing | Microsoft Careers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 267
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:18:08-05:00'
sources: []
---

Think of a company’s network like a bustling city where data are the people who need to get from one place to another quickly and safely. The **computer** is the city’s traffic controller, deciding which roads (protocols) are open and how fast cars can go. In a Microsoft technical interview you’ll be asked to explain how that traffic system works:  
- **Packets** are like mail parcels; they carry a *header* (address, size) so the network knows where to deliver them.  
- The **Internet Protocol (IP)** is the postal service that routes each parcel based on its destination address.  
- **TCP** acts as the reliable courier—if a parcel gets lost it’s resent until the receiver confirms receipt.  
- **DNS** is the city’s phone book, translating friendly names (“www.microsoft.com”) into numeric addresses (IP).  

The interviewer wants to see you understand how these parts cooperate so data move reliably across the “city.” They’ll ask you to sketch a simple route or explain why a packet might be dropped. By framing it as traffic in a city, you can describe the mechanics without getting lost in jargon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
