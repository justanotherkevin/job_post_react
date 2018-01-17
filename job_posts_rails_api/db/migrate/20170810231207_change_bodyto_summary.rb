class ChangeBodytoSummary < ActiveRecord::Migration[5.0]
  def change
      rename_column :job_posts, :body, :summary 
  end
end
