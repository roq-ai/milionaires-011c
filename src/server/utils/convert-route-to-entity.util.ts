const mapping: Record<string, string> = {
  organizations: 'organization',
  'performance-evaluations': 'performance_evaluation',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
