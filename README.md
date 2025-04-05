### Run command

`npm run mb`

#### Explanation for running npm run mb
 
- In order to instantiate mountebank instance, we need to run mb.exe file that is located at
`mb/node_modules/mountebank/bin/mb`

- This will instatiate mb which will start listening/taking orders at local port 2525
- To create most useful mb instant, we need to use flags `mb --configfile imposter.ejs --allowInjection --localOnly –origin`
- To simplify the run command, we put this entire run script `mb/node_modules/mountebank/bin/mb --configfile imposter.ejs --allowInjection --localOnly –origin` inside package.json file. Check out package.json
