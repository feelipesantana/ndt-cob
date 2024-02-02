import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksChannel extends Schema.Component {
  collectionName: 'components_blocks_channels';
  info: {
    displayName: 'channel';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    bg_image: Attribute.Media;
    bg_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    info: Attribute.String & Attribute.Required;
    description_info: Attribute.String;
  };
}

export interface BlocksHighlighPost extends Schema.Component {
  collectionName: 'components_blocks_highligh_posts';
  info: {
    displayName: 'Highlight Post';
    icon: 'magic';
    description: '';
  };
  attributes: {
    post: Attribute.Component<'items.post', true> & Attribute.Required;
  };
}

export interface BlocksHighlightSidePost extends Schema.Component {
  collectionName: 'components_blocks_highlight_side_post_s';
  info: {
    displayName: 'Highlight Side Post ';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    post: Attribute.Component<'items.post', true> &
      Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
  };
}

export interface ItemsLink extends Schema.Component {
  collectionName: 'components_items_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    URL: Attribute.String & Attribute.Required;
    color_link: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ItemsPost extends Schema.Component {
  collectionName: 'components_items_posts';
  info: {
    displayName: 'Post';
    icon: 'book';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    image: Attribute.Media;
    admin_user: Attribute.Relation<'items.post', 'oneToOne', 'admin::user'>;
    about: Attribute.RichText;
    category: Attribute.Relation<
      'items.post',
      'oneToOne',
      'api::category.category'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.channel': BlocksChannel;
      'blocks.highligh-post': BlocksHighlighPost;
      'blocks.highlight-side-post': BlocksHighlightSidePost;
      'items.link': ItemsLink;
      'items.post': ItemsPost;
    }
  }
}
