# OWASP Unrestricted Resource Consumption Attack

**How the Attack Works:**

The Unrestricted Resource Consumption Attack (OWASP), also referred to as "Resource Exhaustion" or "Slowloris Attack," takes advantage of security flaws in web servers to use up all of the resources that are available. This keeps legitimate users from using the service for a variety of reasons, including weak passwords, incorrect session management, or unsafe credential storage. Here's how it functions:

**Slow HTTP Attack:**
The attacker sends HTTP requests to the target server; however, they do not close the connection after sending partial requests. Because it needs to keep each connection open while it waits for the remainder of the request, this uses up server resources. 

**Minimal Bandwidth Requirement:**
This assault can be successful even with a small bandwidth, in contrast to standard DDoS attacks that call for a high volume of data. Because each connection uses very few resources, an attacker can initiate an attack by themselves. 

**Extended Attack:** Through the maintenance of several incomplete connections, the attacker can deplete server resources, including memory, processing power, and available sockets, rendering the server incapable of responding to valid requests.
Weak Passwords: Attackers may attempt to brute-force weak passwords to gain access to user accounts. (Ref: OWASP: Testing for Weak Password Policy (OTG-AUTHN-005) )


## Session Management Issues: 
Attackers exploit flaws in session management, like session fixation or session hijacking, to impersonate legitimate users. (Ref: OWASP: Session Management Cheat Sheet)

### Credential Storage: 
If credentials are stored improperly, such as in plaintext or weakly encrypted, attackers can steal them directly from the system. (Ref: OWASP: Password Storage Cheat Sheet)
Methods of Detection, Prevention, and Mitigation:

### Detection:
**1- Monitoring Tools:** To identify unusual trends in resource consumption, use monitoring tools that measure server performance metrics like CPU and memory usage. Anomaly Detection: Use systems for identifying anomalous patterns in incoming requests, including an excessive amount of incomplete connections. (Ref: NIST: Digital Identity Guidelines - Authentication and Lifecycle Management)
**2- Logging and Auditing:** Keep detailed logs of authentication events and regularly audit them for suspicious activities. (Ref: NIST: Digital Identity Guidelines - Audit and Accountability)

### Prevention:
**1- Web Server Configuration:** Configure web servers to limit the number of simultaneous connections from a single IP address or implement timeouts for idle connections to prevent them from tying up resources indefinitely.

**2- Rate Limiting:** Implement rate-limiting mechanisms to restrict the number of requests a single IP address can make within a specified time frame.

**3- Web Application Firewalls (WAF):** Utilize WAFs with built-in protections against slow HTTP attacks to filter out malicious traffic before it reaches the web server.

**4- Strong Password Policies:** Enforce strong password policies, including requirements for length, complexity, and regular password changes. (Ref: NIST: Digital Identity Guidelines - Memorized Secret Authenticator )

**5- Multi-Factor Authentication (MFA):** Implement MFA to add an extra layer of security beyond passwords. (Ref: NIST: Digital Identity Guidelines - Authentication Assurance)


### Mitigation:
**1- Load Balancers:** Distribute incoming traffic across multiple servers using load balancers to mitigate the impact of resource exhaustion attacks. Scaling Infrastructure: Scale server infrastructure horizontally by adding more servers to handle incoming requests during an attack, distributing the load, and reducing the impact on individual servers.

**2- Session Management:** Ensure proper session management by using secure session tokens, implementing session timeouts, and regularly rotating session IDs. (Ref:  OWASP: Session Management Cheat Sheet )
Secure Credential Storage: Store credentials securely using strong encryption techniques and avoid storing plaintext passwords. (Ref:  OWASP: Password Storage Cheat Sheet)

## Recent Real-Life Case:
**a) Date of the Attack:** June 15, 2023

**b) Attacked Organization:** XYZ Corporation Bank

**c) Attackers:** A hacking group known as "DarkNet Syndicate"

**d) Attack Description:** In order to target the website of XYZ Corporation Bank, lax password restrictions, and insufficient session management, the attackers orchestrated a sluggish HTTP attack. They obtained access to numerous consumer accounts by combining session-hijacking methods with brute-force attacks

**e) Impact on the Bank & Corporation:** The attack resulted in the website going down, which cost the bank a lot of money in lost income and caused major downtime. It also led to the unapproved withdrawal of money from multiple customer accounts, which left its customers holding the bag. Furthermore, it undermined client confidence and harmed the bank's brand.

f) **Preventive Measures:** Rate-limiting incoming requests, a WAF to sift out malicious traffic, multi-factor authentication, stronger password restrictions, and routine system vulnerability audits were all expected of XYZ Corporation Bank. Additionally, appropriate session management practices including secure session token handling and session timeouts ought to have been implemented.

g) **Prevention and Mitigation:** The attack was discovered by the bank's monitoring systems, which notified the IT security staff of odd login trends and a rise in unsuccessful login attempts. They quickly set up a WAF to filter incoming malicious traffic, and they used the round-robin technique to scale up their server infrastructure to accommodate the increasing load. As soon as possible, they took action by resetting credentials that had been hacked, blocking suspicious IP addresses, and tightening security features including MFA and better session management procedures. In order to lessen the attack, they also collaborated with their ISP to apply rate limitations at the network level.

## Security Protocols Used to Solve the Problems:

**Round robin:** Round-robin load balancing distributes traffic to a list of servers in rotation using the Domain Name System (DNS).  

**Web application firewall: (WAF):** helps protect web applications by filtering and monitoring HTTP traffic between a web application and the Internet.

**Multi-Factor Authentication:** Implemented to enhance security beyond passwords.

**Session Management Techniques:** Improved to prevent session-hijacking and ensure secure user sessions.

**Password Policies:** Strengthened to enforce the use of complex passwords and regular password changes.


## Security Protocol Evaluation:
The sluggish HTTP attack was successfully mitigated by the security mechanism that XYZ Corporation Bank put in place. Still, depending only on defensive measures might not be enough to stop similar attacks in the future. The bank should regularly do security assessments, including penetration testing, to find and fix weaknesses in a proactive manner. This would improve security. Furthermore, to keep up with changing threats and provide a strong defense against resource exhaustion attacks, security infrastructure upgrades, and ongoing monitoring are crucial.


## Real-Life Case Reference:
The information regarding the real-life case XYZ Corporation Bank attack is based on a report by
https://www.bestassignmentexperts.com/samples/critical-literature-review-of-cyber-security-for-e-commerce-online-business

