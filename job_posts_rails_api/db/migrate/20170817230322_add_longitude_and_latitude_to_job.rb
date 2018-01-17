class AddLongitudeAndLatitudeToJob < ActiveRecord::Migration[5.0]
  def change
    add_column :job_posts, :longitude, :string
    add_column :job_posts, :latitude, :string
  end
end
