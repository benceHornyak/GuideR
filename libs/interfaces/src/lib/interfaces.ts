export interface AppwriteConfig {
  endpoint: string;
  projectId: string;
}

export interface Environment {
  production: boolean;
  appwrite: AppwriteConfig;
}
