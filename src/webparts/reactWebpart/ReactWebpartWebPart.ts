import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ReactWebpartWebPartStrings';
import ReactWebpart from './components/ReactWebpart';
import { IReactWebpartProps } from './components/IReactWebpartProps';
import { toAbsoluteUrl } from '@pnp/sp';

export interface IReactWebpartWebPartProps {
  description: string;
}

export default class ReactWebpartWebPart extends BaseClientSideWebPart<IReactWebpartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReactWebpartProps > = React.createElement(
      ReactWebpart,
      {
        description: this.properties.description,
//                 //  {/* ---------------P059  ReadSiteProperties----------------- */}
        absoluteurl: this.context.pageContext.web.absoluteUrl,
        sitetitle: this.context.pageContext.web.title,
        relativeurl: this.context.pageContext.web.serverRelativeUrl,
        username: this.context.pageContext.user.displayName
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
