require 'sinatra'
configure { set :server, :puma }

set :root, File.dirname(__FILE__)
set :public_folder, File.dirname(__FILE__) + "/public"

get "/" do
  render :html, :index
end
