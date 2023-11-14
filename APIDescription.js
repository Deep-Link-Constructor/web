function createAPIDescription() {
  let apiDescription = document.createElement('div');
  apiDescription.innerHTML = `
    <h2>API Description</h2>
    <p>This page dynamically generates links based on URL parameters. The following parameters are used:</p>
    <ul>
      <li><b>h1:</b> Sets the page header.</li>
      <li><b>desc:</b> Sets a description text below the header.</li>
      <li><b>cu[Number]:</b> Custom link format, where [Number] is a unique identifier. The value is formatted as 'Name|URL|Icon'.</li>
      <li><b>[ServiceKey]:</b> Key for predefined services like 'in' for Instagram, 'yo' for YouTube. The value is the user ID for the service.</li>
    </ul>
    <p>Example: ?h1=My%20Page&desc=Follow%20me!&cu1=MyBlog|https://myblog.com|blog&in=myprofile</p>
  `;
  document.body.appendChild(apiDescription);
}
