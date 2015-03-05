/**
 * Created by osemenkova on 3/4/2015.
 */
require.config({
    baseUrl: 'Scripts',
    paths:{
        'jquery': 'jquery-2.0.3',
        'knockout': 'knockout-3.3.0'
    }
});

require(["jquery", "knockout", "underscore"]);