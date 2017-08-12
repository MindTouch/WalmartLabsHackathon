# MindTouch Touchpoints Starter Kit

This is the MindTouch Touchpoints Starter Kit for the WalmartLabs / MindTouch Hackathon, August 12th 2017.

[MindTouch](https://mindtouch.com/product) is a SaaS application that powers online product help manual websites and customer self-service knowledgebases for brands such as Whirlpool, Cisco, Paypal, Docker, and even Walmart! Our software helps companies author and publish product help content into mobile web ready guides and user manuals -- optimized for both SEO and user experience. This content can also be integrated into other web properties such as customer relationship management tools (Salesforce), support ticketing (Zendesk), or e-commerce. These integrations are called MindTouch Touchpoints Touchpoints allow customers to get product information at the point of sale, within the e-commerce experience.

Touchpoints are generated and configured by an administrator of a MindTouch-powered site by using the [Touchpoints Manager](https://success.mindtouch.com/Support/Extend/Touchpoints/MindTouch_Touchpoints%3A_Overview/Create%2C_configure%2C_and_embed_Touchpoints). It’s a simple configurator that allows an administrator to configure an interface into MindTouch-powered product help content and get back a snippet of HTML code. This HTML code can be used to extend product help content into a CMS or CRM system, community, e-commerce etc. — on page load it passes context to the Touchpoint and provides contextually relevant content inside those interfaces.

## Sample HTML Code

Touchpoint codes are simple HTML markup and can be placed into any web application that can accept HTML. During the configuration process, a MindTouch-powered site administrator can lock down which domains can embed the HTML code (this is implemented via [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)).

```html
<!-- Begin Hackathon Showcase Contextual Help Button, Type = f1-button -->
<!-- Generated on [8/12/2017 6:57:12 AM] by MindTouch, Last Updated [8/12/2017 7:05:27 AM] by MindTouch v.17.8.10.0 -->
<script async="async" src="https://walmartlabs.mindtouch.us/@embed/82ccd48ac8bb91a31037842f890f2dd37b9f8fa83d6d73f18ea7ed17a40e07b9.js"></script>
<script type="mindtouch/embed" id="mindtouch-embed-82ccd48ac8bb91a31037842f890f2dd37b9f8fa83d6d73f18ea7ed17a40e07b9"></script>
<!-- End Hackathon Showcase Contextual Help Button -->
```

## Live Example

Check out some MindTouch Touchpoints in use at https://codepen.io/modethirteen/project/full/DQwWxy. See the code supporting this example at https://codepen.io/modethirteen/project/editor/DQwWxy.

## Code Examples

This repository contains receipes and examples of how to better integrate MindTouch Touchpoints with an application that you are building.
