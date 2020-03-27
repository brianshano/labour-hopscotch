// Contentful Client example
import { createClient } from 'contentful';

export default class ContentfulClient {
  getClient = async () => {
    const client = await createClient({
      space: '3mvtf9hx44sd',
      accessToken: 'lidYYf2UG2FiinMVzNMJ3xcJq'
    });
    console.log('client', client);

    return client;
  };
  getEntry = async id => {
    const client = await this.getClient();
    const entry = await client.getEntry(id, { include: 10 }).then(response => {
      console.log('here is response', response);
    });
    // return entry;
  };
}
