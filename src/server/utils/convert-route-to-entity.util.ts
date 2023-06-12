const mapping: Record<string, string> = {
  academies: 'academy',
  parents: 'parent',
  'performance-data': 'performance_data',
  players: 'player',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
