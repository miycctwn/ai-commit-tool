import { Config } from '../config';
import { AIProvider } from './types';
import { OpenAIProvider } from './providers/OpenAIProvider';
import { OpenRouterProvider } from './providers/OpenRouterProvider';
import { OllamaProvider } from './providers/OllamaProvider';
import { CustomProvider } from './providers/CustomProvider';

export class AIServiceFactory {
  static createProvider(config: Config): AIProvider {
    switch (config.aiProvider) {
      case 'openai':
        return new OpenAIProvider();
      case 'openrouter':
        return new OpenRouterProvider();
      case 'ollama':
        return new OllamaProvider();
      case 'custom':
        return new CustomProvider();
      default:
        throw new Error(`Unsupported AI provider: ${config.aiProvider}`);
    }
  }
}
