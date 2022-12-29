
<h1 align="center">
  Tractian API
  <br>
</h1>

<p align="center">
  <a href="#installation">Install and Run</a> •
  <a href="#considerations">Considerations</a> •
  <a href="#client-to-be-used">Client to be used</a> •
  <a href="#future-changes">Future Changes</a>
</p>

## Install and Run

* `yarn`
* `yarn start`

## Considerations

To use this API you will need Node and Mongo. You can use insomnia to easily make HTTP requests and populate the Database. If you do not populate the Database, the API will be set a mocked data just for testing purpose.

## Client to be used
This is the [Client](https://github.com/samisafatli/tractian-client) that will be using this API.

## Future Changes
This application can and will be improved. This is a list of some improvements to be made
- Add validations to the requests
- Deploy the app on Netlify
- Add docker configurations to facilitate the use of local Mongo
- Connect Units and Company with the Assets controller
- Create testing to make the API more solid