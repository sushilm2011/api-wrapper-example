import { DynamicModule, Module, Global, Provider } from '@nestjs/common';
import { BaseApiConfig, EndpointConfig } from './api-wrapper.interface';

@Global()
@Module({})
export class ApiWrapperModule {
  static forRoot(options: BaseApiConfig): DynamicModule {
    return {
      module: ApiWrapperModule,
      providers: [
        {
          provide: 'BASE_API_URL',
          useValue: options.baseUrl,
        },
      ],
      exports: ['BASE_API_URL'],
    };
  }

  static forFeature(options: EndpointConfig): DynamicModule {
    const featureConfigProvider: Provider = {
      provide: 'API_ENDPOINT',
      useFactory: (baseApiUrl: string) => {
        return `${baseApiUrl}${options.endpoint}`;
      },
      inject: ['BASE_API_URL'],
    };

    return {
      module: ApiWrapperModule,
      providers: [featureConfigProvider],
      exports: [featureConfigProvider],
    };
  }
}
