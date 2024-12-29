import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'P061ReactCrudWebPartStrings';
import P061ReactCrud from './components/P061ReactCrud';
import { IP061ReactCrudProps } from './components/IP061ReactCrudProps';

export interface IP061ReactCrudWebPartProps {
  description: string;
}

export default class P061ReactCrudWebPart extends BaseClientSideWebPart<IP061ReactCrudWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IP061ReactCrudProps > = React.createElement(
      P061ReactCrud,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
