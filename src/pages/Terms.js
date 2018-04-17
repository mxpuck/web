import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { scrollTop } from 'utils/scroller';

export default class Terms extends Component {
  componentDidMount() {
    scrollTop();
  }

  render() {
    return (
      <div className="padded-container">
        <h1>Terms of Service</h1>
          <span>Last Updated At: March 19th, 2018</span>
          <p>These Terms of Service (&quot;Terms&quot;) apply to your access to and use of Steemhunt.com and any other products or services that link to these Terms (&quot;Steemhunt&quot;). Steemhunt is provided by Steemit users - <a href="https://steemit.com/@tabris" target="_blank" rel="noopener noreferrer">@tabris</a> and <a href="https://steemit.com/@project7" target="_blank" rel="noopener noreferrer">@projec7</a> (&quot;Steemhunt&quot;, &quot;we&quot; or &quot;us&quot;). By accessing or using Steemhunt, you agree to be bound by these Terms. If you do not agree to these Terms, do not access or use Steemhunt. If we make changes to these Terms, we will provide notice of those changes by updating the &quot;Last Updated&quot; date above or posting notice on Steemhunt. Your continued use of Steemhunt will confirm your acceptance of the changes.</p>
          <p>You understand and agree that these Terms apply solely to your access to, and use of, Steemhunt and that, when you use other Steemhunt services such as Steemhunt.com, the terms and policies particular to those services apply.</p>
        <h2>1. Privacy Policy</h2>
          <p>Please refer to our <Link to="/privacy">Privacy Policy</Link> for information about how we collect, use and disclose information about you.</p>
        <h2>2. Eligibility</h2>
          <p>Steemhunt is not targeted towards, nor intended for use by, anyone under the age of 18. You must be at least 18 years of age to access or use Steemhunt.</p>
        <h2>3. Copyright and Limited License</h2>
          <p>Steemhunt contains data, text, photographs, images, video, audio, graphics, articles, comments, software, code, scripts and other content supplied by us, the Steem blockchain or our licensors, which we call &quot;Steemhunt Content.&quot; Steemhunt Content is protected by intellectual property laws, including copyright and other proprietary rights of applicable countries. Except as explicitly stated in these Terms, Steemhunt does not grant any express or implied rights to use Steemhunt Content.</p>
          <p>You are granted a limited, nonexclusive, non-transferable, and non-sublicensable license to access and use Steemhunt and Steemhunt Content for your personal, non-commercial use. This license is subject to these Terms and does not include any right to: (a) distribute, publicly perform or publicly display any Steemhunt Content; (b) modify or otherwise make any derivative uses of Steemhunt or Steemhunt Content, or any portion thereof; (c) use any data mining, robots or similar data gathering or extraction methods; and (d) use Steemhunt or Steemhunt Content other than for their intended purposes. Any use of Steemhunt or Steemhunt Content other than as authorized in these Terms is strictly prohibited and will terminate the license granted herein. This license is revocable at any time.</p>
        <h2>4. Adult-Oriented Content</h2>
          <p>Steemhunt is intended for a general audience and, as a result, some Steemhunt Content may discuss or depict adult-oriented topics. We realize that this content may not be appropriate or desirable for some of our readers depending on their current location, age, background or personal views. As a result, we mark this content as Not Safe For Work (&quot;NSFW&quot;).</p>
          <p>Marking Steemhunt Content as NSFW does not prevent you from being able to access this content but, instead, helps you make informed decisions about the type of content you view on Steemhunt. You understand and agree that you access content marked as NSFW at your own risk.</p>
        <h2>5. Trademarks</h2>
          <p>&quot;Steemhunt&quot;, the Steemhunt logo and any other product or service names, logos or slogans that may appear on Steemhunt are trademarks of Steemhunt and may not be copied, imitated or used, in whole or in part, without our prior written permission. You may not use any metatags or other &quot;hidden text&quot; utilizing &quot;Steemhunt&quot; or any other name, trademark or product or service name of Steemhunt without our prior written permission. In addition, the look and feel of Steemhunt, including, without limitation, all page headers, custom graphics, button icons and scripts, constitute the service mark, trademark or trade dress of Steemhunt and may not be copied, imitated or used, in whole or in part, without our prior written permission. All other trademarks, registered trademarks, product names and company names or logos mentioned or used on Steemhunt are the property of their respective owners and may not be copied, imitated or used, in whole or in part, without the permission of the applicable trademark holder. Reference to any products, services, processes or other information by name, trademark, manufacturer, supplier or otherwise does not constitute or imply endorsement, sponsorship or recommendation by Steemhunt.</p>
        <h2>6. Assumption of Risk, Limitations on Liability &amp; Indemnity</h2>
          <p>6.1. You accept and acknowledge that there are risks associated with utilizing an Internet-based STEEM account service including, but not limited to, the risk of failure of hardware, software and Internet connections, the risk of malicious software introduction, and the risk that third parties may obtain unauthorized access to information stored within your Account, including, but not limited to your Private Key (as defined below at 10.2.). You accept and acknowledge that Steemhunt will not be responsible for any communication failures, disruptions, errors, distortions or delays you may experience when using the Services, however caused.</p>
          <p>6.2. We will use reasonable endeavours to verify the accuracy of any information on the Service but we make no representation or warranty of any kind, express or implied, statutory or otherwise, regarding the contents of the Service, information and functions made accessible through the Service, any hyperlinks to third party websites, nor for any breach of security associated with the transmission of information through the Service or any website linked to by the Service.</p>
          <p>6.3. We will not be responsible or liable to you for any loss and take no responsibility for and will not be liable to you for any use of our Services, including but not limited to any losses, damages or claims arising from: (a) User error such as forgotten passwords, incorrectly constructed transactions, or mistyped STEEM addresses; (b) Server failure or data loss; (c) Corrupted Account files; (d) Unauthorized access to applications; (e) Any unauthorized third party activities, including without limitation the use of viruses, phishing, bruteforcing or other means of attack against the Service or Services.</p>
          <p>6.4. We make no warranty that the Service or the server that makes it available, are free of viruses or errors, that its content is accurate, that it will be uninterrupted, or that defects will be corrected. We will not be responsible or liable to you for any loss of any kind, from action taken, or taken in reliance on material, or information, contained on the Service.</p>
          <p>6.5. Subject to 7.1 below, any and all indemnities, warranties, terms and conditions (whether express or implied) are hereby excluded to the fullest extent permitted under applicable law.</p>
          <p>6.6. We will not be liable, in contract, or tort (including, without limitation, negligence), other than where we have been fraudulent or made negligent misrepresentations.</p>
          <p>6.7. Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence, fraudulent misrepresentation, or any other liability which may not otherwise be limited or excluded under applicable law.</p>
        <h2>7. Agreement to Hold Steemhunt Harmless</h2>
          <p>7.1. You agree to hold harmless Steemhunt (and each of our officers, directors, members, employees, agents and affiliates) from any claim, demand, action, damage, loss, cost or expense, including without limitation reasonable legal fees, arising out or relating to:</p>
          <ul>
            <li>7.1.1. Your use of, or conduct in connection with, our Services;</li>
            <li>7.1.2. Any feedback or submissions you provide (see 17 below);</li>
            <li>7.1.3. Your violation of these Terms; or</li>
            <li>7.1.4. Violation of any rights of any other person or entity.</li>
          </ul>
          <p>7.2. If you are obligated to indemnify us, we will have the right, in our sole discretion, to control any action or proceeding (at our expense) and determine whether we wish to settle it.</p>
        <h2>8. No Liability For Third Party Services And Content</h2>
          <p>8.1. In using our Services, you may view content or utilize services provided by third parties, including links to web pages and services of such parties (&quot;Third Party Content&quot;). We do not control, endorse or adopt any Third-Party Content and will have no responsibility for Third Party Content including, without limitation, material that may be misleading, incomplete, erroneous, offensive, indecent or otherwise objectionable in your jurisdiction. In addition, your dealings or correspondence with such third parties are solely between you and the third parties. We are not responsible or liable for any loss or damage of any sort incurred as a result of any such dealings and you understand that your use of Third Party Content, and your interactions with third parties, is at your own risk.</p>
        <h2>9. Account Registration</h2>
          <p>9.1. You need not use a Steemhunt Account. If you wish to use an Account, you must create an Account with Steemhunt to access the Services (&quot;Account&quot;). When you create an Account, you are strongly advised to take the following precautions, as failure to do so may result in loss of access to, and/or control over, your Wallet: (a) Create a strong password that you do not use for any other website or online service; (b) Provide accurate and truthful information; (c) Maintain and promptly update your Account information; (d) maintain the security of your Account by protecting your Account password and access to your computer and your Account; (e) Promptly notify us if you discover or otherwise suspect any security breaches related to your Account.</p>
          <p>9.2. You hereby accept and acknowledge that you take responsibility for all activities that occur under your Account and accept all risks of any authorized or unauthorized access to your Account, to the maximum extent permitted by law.</p>
        <h2>10. The Steemhunt Services</h2>
          <p>10.1. As described in more detail below, the Services, among other things, provide in-browser (or otherwise local) software that (a) generates and stores STEEM ACCOUNT Addresses and encrypted Private Keys (defined below), and (b) Facilitates the submission of STEEM transaction data to the Steem network without requiring you to access the STEEM command line interface.</p>
          <p>10.2. Account Names and Private Keys. When you create an Account, the Services generate and store a cryptographic private and public key pair that you may use to send and receive STEEM and Steem Dollars via the Steem network. The Private Key uniquely matches the Account Name and must be used in connection with the Account Name to authorize the transfer of STEEM and Steem Dollars from that Account. You are solely responsible for maintaining the security of your Private Key and any password phrase associated with your wallet. You must keep your Account, password phrase and Private Key access information secure. Failure to do so may result in the loss of control of Steem, Steem Power and Steem Dollars associated with the Wallet.</p>
          <p>10.3. No Password Retrieval. Steemhunt does not receive or store your Account password, or the unencrypted keys and addresses. Therefore, we cannot assist you with Account password retrieval. Our Services provide you with tools to help you remember or recover your password, including by allowing you to set password hints, but the Services cannot generate a new password for your Account. You are solely responsible for remembering your Account password. If you have not safely stored a backup of any Account Names and password pairs maintained in your Account, you accept and acknowledge that any STEEM, Steem Dollars and Steem Power you have associated with such Account will become inaccessible if you do not have your Account password.</p>
          <p>10.4. Transactions. In order to be completed, all proposed Steem transactions must be confirmed and recorded in the Steem public ledger via the Steem distributed consensus network (a peer-to-peer economic network that operates on a cryptographic protocol), which is not owned, controlled or operated by Steemhunt. The Steem Network is operated by a decentralized network of independent third parties. Blockchain has no control over the Steem network and therefore cannot and does not ensure that any transaction details you submit via the Services will be confirmed via the Steem network. You acknowledge and agree that the transaction details you submit via the Services may not be completed, or may be substantially delayed, by the Steem network. You may use the Services to submit these details to the network.</p>
          <p>10.5. No Storage or Transmission of STEEM, Steem Dollars or Steem Power. Steem, in any of its forms (STEEM, Steem Dollars and Steem Power) is an intangible, digital asset. They exist only by virtue of the ownership record maintained in the Steem network. The Service does not store, send or receive Steem. Any transfer of title that might occur in any STEEM, Steem Dollars or Steem Power occurs on the decentralized ledger within the Steem network and not within the Services. We do not guarantee that the Service can effect the transfer of title or right in any Steem, Steem Dollars or Steem Power.</p>
          <p>10.6. Relationship. Nothing in these Terms is intended to nor shall create any partnership, joint venture, agency, consultancy or trusteeship, you and Steemhunt being with respect to one another independent contractors.</p>
          <p>10.7. Accuracy of Information. You represent and warrant that any information you provide via the Services is accurate and complete. You accept and acknowledge that Steemhunt is not responsible for any errors or omissions that you make in connection with any Steem transaction initiated via the Services, for instance, if you mistype an Account Name or otherwise provide incorrect information. We strongly encourage you to review your transaction details carefully before completing them via the Services.</p>
          <p>10.8. No Cancellations or Modifications. Once transaction details have been submitted to the Steem network via the Services, The Services cannot assist you to cancel or otherwise modify your transaction details. Steemhunt has no control over the Steem Network and does not have the ability to facilitate any cancellation or modification requests.</p>
          <p>10.9. Taxes. It is your responsibility to determine what, if any, taxes apply to the transactions you for which you have submitted transaction details via the Services, and it is your responsibility to report and remit the correct tax to the appropriate tax authority. You agree that Steemhunt is not responsible for determining whether taxes apply to your Steem transactions or for collecting, reporting, withholding or remitting any taxes arising from any Steem transactions.</p>
        <h2>11. Fees for Using the Steemhunt Services</h2>
          <p>11.1. 10% beneficiaries will be used for Steemhunt operation, and another 5% for sponsors who delegated Steem Power to @steemhunt.</p>
        <h2>12. No Right To Cancel And&sol;Or Reverse Steem Transactions</h2>
          <p>12.1. If you use a Service to which Steem, Steem Dollars or Steem Power is transacted, you will not be able to change your mind once you have confirmed that you wish to proceed with the Service or transaction.</p>
        <h2>13. Discontinuation of Services</h2>
          <p>13.1. We may, in our sole discretion and without cost to you, with or without prior notice and at any time, modify or discontinue, temporarily or permanently, any portion of our Services. You are solely responsible for storing, outside of the Services, a backup of any Account and Private Key pair that you maintain in your Wallet.</p>
          <p>13.2. If you do not maintain a backup of your Account data outside of the Services, you will be may not be able to access Steem, Steem Dollars and Steem Power associated with any Account Name maintained in your Account in the event that we discontinue or deprecate the Services.</p>
        <h2>14. Suspension or Termination of Service.</h2>
          <p>14.1. We may suspend or terminate your access to the Services in our sole discretion, immediately and without prior notice, and delete or deactivate your Account and all related information and files in such without cost to you, including, for instance, in the event that you breach any term of these Terms. In the event of termination, your access to funds will depend on your access to your backup of your Account data including your Account Name and Private Keys.</p>
        <h2>15. User Conduct</h2>
          <p>15.1. When accessing or using the Services, you agree that you will not commit any unlawful act, and that you are solely responsible for your conduct while using our Services. Without limiting the generality of the foregoing, you agree that you will not:</p>
          <ul>
            <li>15.1.1. Use our Services in any manner that could interfere with, disrupt, negatively affect or inhibit other users from fully enjoying our Services, or that could damage, disable, overburden or impair the functioning of our Services in any manner;</li>
            <li>15.1.2. Use our Services to pay for, support or otherwise engage in any illegal activities, including, but not limited to illegal gambling, fraud, money- laundering, or terrorist activities;</li>
            <li>15.1.3. Use any robot, spider, crawler, scraper or other automated means or interface not provided by us to access our Services or to extract data;</li>
            <li>15.1.4. Use or attempt to use another user’s Wallet without authorization;</li>
            <li>15.1.5. Attempt to circumvent any content filtering techniques we employ, or attempt to access any service or area of our Services that you are not authorized to access;</li>
            <li>15.1.6. Introduce to the Services any virus, Trojan, worms, logic bombs or other harmful material;</li>
            <li>15.1.7. Develop any third-party applications that interact with our Services without our prior written consent;</li>
            <li>15.1.8. Provide false, inaccurate, or misleading information; or</li>
            <li>15.1.9. Encourage or induce any third party to engage in any of the activities prohibited under this Section;</li>
            <li>15.1.10. Reverse engineer any aspect of Steemhunt or do anything that might discover source code or bypass or circumvent measures employed to prevent or limit access to any Steemhunt Content, area or code of Steemhunt.</li>
          </ul>
        <h2>16. Third-Party Content and Sites</h2>
          <p>Steemhunt may include links and other content owned or operated by third parties, including advertisements and social &quot;widgets&quot; (we call these &quot;Third-Party Content&quot;). You agree that Steemhunt is not responsible or liable for Third-Party Content and that you access and use Third-Party Content at your own risk. Your interactions with Third-Party Content are solely between you and the third party providing the content. When you leave Steemhunt, you should understand that these Terms no longer govern and that the terms and policies of those third-party sites or services will then apply.</p>
        <h2>17. Feedback</h2>
          <p>You may submit questions, comments, feedback, suggestions, and other information regarding Steemhunt (we call this &quot;Feedback&quot;). You acknowledge and agree that Feedback is non-confidential and will become the sole property of Steemhunt. Steemhunt shall own exclusive rights, including, without limitation, all intellectual property rights, in and to such Feedback and is entitled to the unrestricted use and dissemination of this Feedback for any purpose, without acknowledgment or compensation to you. You agree to execute any documentation required by Steemhunt to confirm such assignment to Steemhunt.</p>
        <h2>18. Copyright Complaints</h2>
          <p>Steemhunt respects the intellectual property of others by not reading infringed content from the Steem blockchain. If you believe that your work has been copied in a way that constitutes copyright infringement, you may notify Steemhunt by contacting: <a href="mailto:steemhunt@gmail.com">steemhunt@gmail.com</a>.</p>
          <p>Please see <a href="http://www.copyright.gov/title17/92chap5.html#512" target="_blank" rel="noopener noreferrer">17 U.S.C. &sect;512(c)(3)</a> for the requirements of a proper notification. You should note that if you knowingly misrepresent in your notification that the material or activity is infringing, you may be liable for any damages, including costs and attorneys' fees, incurred by Steemhunt or the alleged infringer, as the result of Steemhunt's relying upon such misrepresentation in removing or disabling access to the material or activity claimed to be infringing.</p>
        <h2>19. Disclaimers</h2>
          <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, STEEMHUNT AND THE STEEMHUNT CONTENT ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT AND ANY WARRANTIES IMPLIED BY ANY COURSE OF PERFORMANCE OR USAGE OF TRADE. STEEMHUNT DOES NOT REPRESENT OR WARRANT THAT STEEMHUNT AND THE STEEMHUNT CONTENT: (A) WILL BE SECURE OR AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; (B) ARE ACCURATE, COMPLETE, RELIABLE, CURRENT OR ERROR-FREE OR THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED; AND (C) ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. YOUR USE OF STEEMHUNT AND THE STEEMHUNT CONTENT IS SOLELY AT YOUR OWN RISK. SOME JURISDICTIONS DO NOT ALLOW THE DISCLAIMER OF IMPLIED TERMS IN CONTRACTS WITH CONSUMERS, SO SOME OR ALL OF THE DISCLAIMERS IN THIS SECTION MAY NOT APPLY TO YOU.</p>
        <h2>20. Limitation of Liability</h2>
          <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL STEEMHUNT OR THE STEEMHUNT PARTIES BE LIABLE FOR ANY SPECIAL, INDIRECT, INCIDENTAL, CONSEQUENTIAL, EXEMPLARY OR PUNITIVE DAMAGES, OR ANY OTHER DAMAGES OF ANY KIND, INCLUDING, BUT NOT LIMITED TO, LOSS OF USE, LOSS OF PROFITS OR LOSS OF DATA, WHETHER IN AN ACTION IN CONTRACT, TORT (INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE) OR OTHERWISE, ARISING OUT OF, OR IN ANY WAY CONNECTED WITH, THE USE OF, OR INABILITY TO USE, STEEMHUNT OR THE STEEMHUNT CONTENT. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE AGGREGATE LIABILITY OF STEEMHUNT OR THE STEEMHUNT PARTIES, WHETHER IN CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE, WHETHER ACTIVE, PASSIVE OR IMPUTED), PRODUCT LIABILITY, STRICT LIABILITY OR OTHER THEORY, ARISING OUT OF OR RELATING TO: (A) THE USE OF OR INABILITY TO USE STEEMHUNT OR THE STEEMHUNT CONTENT; OR (B) THESE TERMS EXCEED ANY COMPENSATION YOU PAY, IF ANY, TO STEEMHUNT FOR ACCESS TO OR USE OF STEEMHUNT.</p>
          <p>SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO SOME OR ALL OF THE EXCLUSIONS AND LIMITATIONS IN THIS SECTION MAY NOT APPLY TO YOU.</p>
        <h2>21. Modifications to Steemhunt</h2>
          <p>Steemhunt reserves the right to modify or discontinue, temporarily or permanently, Steemhunt, or any features or portions of Steemhunt, without prior notice. You agree that Steemhunt will not be liable for any modification, suspension or discontinuance of Steemhunt, or any part of Steemhunt.</p>
        <h2>22. Termination</h2>
          <p>Steemhunt reserves the right, without notice and in our sole discretion, to terminate your license to access and use Steemhunt and to block or prevent your future access to, and use of, Steemhunt.</p>
        <h2>23. Severability</h2>
          <p>If any term, clause or provision of these Terms is deemed to be unlawful, void or for any reason unenforceable, then that term, clause or provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions.</p>
        <h2>24. Questions &amp; Contact Information</h2>
          <p>Questions or comments about Steemhunt may be directed to <a href="mailto:steemhunt@gmail.com">steemhunt@gmail.com</a>.</p>
          <p>If you wish to report abuses or copyright infrigement use <a href="mailto:steemhunt@gmail.com">steemhunt@gmail.com</a>.</p>

        <Link to="/">Go to homepage</Link>
      </div>
    );
  }
}
