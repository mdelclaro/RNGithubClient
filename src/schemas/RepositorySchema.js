export default class RepositorySchema {
  static schema = {
    name: 'Repository',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      name: 'string',
      fullname: 'string',
      description: 'string',
      start: 'int',
      forks: 'int'
    }
  };
}
