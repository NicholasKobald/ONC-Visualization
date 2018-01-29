## Proposal 

 Ocean Networks Canada (ONC) has a large number of subsea instruments that communicate information 24/7 to ONC's base at the University of Victoria. There do not exist, however, sophisticated tools to visualize the data they currently store. From ONC's request,

> These instruments collect data on physical, chemical, biological, and geological aspects of the
ocean over long time periods

This data is available on Ocean Network Canadas site, and is used by scientists, politicians,
teachers, and the general public for a variety of use cases. 

Tasks on this dataset include viewing changes at a specific instrument over time, comparing two instruments at a specific point in time, or over a period of time. Additionally, visualizing the positions of these instruments while having quick access to specific data is neccessary for some use cases. 

### Tools \& Solution

A web friendly solution is important for our tool to be easily useable. Likely, an implementation will involve a server side component as well as a database. A possible implementation will use Python and a flavour of SQL to accomplish that. Both of these tools have been used successfully in a myriad of projects with similar technical requirements to ours, which makes them a reliable choice. On the client side, we are actively investigating which JavaScript libraries will be the most effective for our goals, however we feel it is important to validate some of our design before commiting to a very specific toolchain. 


### Evaluation

Our primary method of validation will be user studies of our designs and implementation. ONC is based at the University of Victoria, and we are able to work with some of the researchers there to insure our implementation meets their needs. 


#### Work distribution
* Frontend design: Matt
* Backend design and development: Matt


#### References/Links
http://www.oceannetworks.ca/
Data available at: http://dmas.uvic.ca/home





