const core = require( '@actions/core' );
const github = require( '@actions/github' );
const { processPixelfedFeed } = require( './process' );
const fs = require( 'fs' );

async function run ( ) {
  await processPixelfedFeed( 'https://pixelfed.social/users/FunkyLarma.atom' );
  
  try {} catch ( error ) {
    core.setFailed( error.message );
  }
}

run( );