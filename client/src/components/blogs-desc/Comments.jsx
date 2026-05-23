import React, {
  useEffect,
  useState,
} from 'react';

import { useParams } from 'react-router-dom';

import api from '../../utils/axios.js';


const Comments = () => {

  const { id } = useParams();

  const [comments, setComments] = useState([]);

  const [newComment, setNewComment] = useState('');

  const [loading, setLoading] = useState(false);

  const [submitting, setSubmitting] = useState(false);


  // Fetch Comments
  const fetchComments = async () => {

    try {

      setLoading(true);
      
      const response = await api.get(
        `/comment/${id}`
      );


      setComments(
        response.data.comments || []
      );

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);
    }
  };


  // Submit Comment
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!newComment.trim()) return;

    try {

      setSubmitting(true);


      const response = await api.post(
        `/comment/create/${id}`,
        {
          comment: newComment,
        }
      );


      console.log(response.data);


      // Refetch Updated Comments
      fetchComments();

      setNewComment('');

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Failed to add comment"
      );

    } finally {

      setSubmitting(false);
    }
  };


  useEffect(() => {
    fetchComments();
  }, [id]);


  return (
    <section className="w-full bg-white pb-24 font-sans antialiased">

      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">

          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Comments
          </h2>

          <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-0.5 rounded-full">
            {comments.length}
          </span>

        </div>


        {/* Comment Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-slate-200/60 rounded-2xl p-4 sm:p-5 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.01),0_1px_3px_rgba(0,0,0,0.01)] mb-10"
        >

          <div className="space-y-4">

            <textarea
              rows="3"
              value={newComment}
              onChange={(e) =>
                setNewComment(e.target.value)
              }
              placeholder="Join the discussion... Share your thoughts."
              required
              className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500/30 transition-all resize-none leading-relaxed"
            />


            <div className="flex justify-end pt-1">

              <button
                type="submit"
                disabled={submitting}
                className="px-5 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-xs rounded-xl shadow-sm shadow-cyan-500/10 transition-all duration-200 active:scale-[0.98]"
              >
                {
                  submitting
                    ? "Posting..."
                    : "Submit Comment"
                }
              </button>

            </div>

          </div>
        </form>


        {/* Loading */}
        {
          loading && (
            <p className="text-sm text-slate-400">
              Loading comments...
            </p>
          )
        }


        {/* Comments List */}
        <div className="space-y-6">

          {
            comments.map((comment) => (

              <div
                key={comment.id}
                className="bg-white border border-slate-200/60 p-5 sm:p-6 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.005),0_1px_3px_rgba(0,0,0,0.005)] flex items-start gap-4"
              >

                {/* Avatar */}
                <img
                  src={
                    comment.avatar ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt={comment.name}
                  className="h-9 w-9 rounded-full object-cover ring-2 ring-slate-100 shrink-0"
                />


                {/* Content */}
                <div className="flex-1 text-left space-y-2">

                  {/* Header */}
                  <div className="flex items-baseline justify-between gap-2">

                    <h4 className="text-sm font-bold text-slate-800 tracking-tight leading-none">
                      {comment.name}
                    </h4>

                    <span className="text-xs font-medium text-slate-400">

                      {
                        new Date(comment.created_at)
                          .toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )
                      }

                    </span>

                  </div>


                  {/* Comment */}
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {comment.comment}
                  </p>

                </div>

              </div>
            ))
          }

        </div>

      </div>
    </section>
  );
};

export default Comments;