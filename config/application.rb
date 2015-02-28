require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module GlodjibApi
  class Application < Rails::Application

    config.middleware.insert_before 0, "Rack::Cors" do
      allow do
        origins '*'
        resource '*', :headers => :any, :methods => [:get, :post, :options]
      end
    end

    config.autoload_paths += %W[#{config.root}/lib]

    config.time_zone = 'Bern'
    config.active_record.default_timezone = :local

    config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '**', '*.{rb,yml}').to_s]
    config.i18n.available_locales = [:de, :en]
    config.i18n.default_locale = :de

    config.active_record.raise_in_transactional_callbacks = true

  end
end
