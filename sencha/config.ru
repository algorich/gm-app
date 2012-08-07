# Based on this: http://stackoverflow.com/a/3930606

# This is the webserver root
@root = File.expand_path(File.dirname(__FILE__))

run Proc.new { |env|
  # Extract the requested path from the request
  path = Rack::Utils.unescape(env['PATH_INFO'])
  index = @root + "#{path}/index.html"

  if File.exists?(index)
    # Return the index
    [200, {'Content-Type' => 'text/html'}, File.read(index)]
  else
    # Pass the request to the directory app
    Rack::Directory.new(@root).call(env)
  end
}