LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_MODULE := gpgme
LOCAL_DESCRIPTION := gpgme

LOCAL_LIBRARIES := \
	libgpg-error \
	libassuan \
	$(NULL)

LOCAL_EXPORT_LDLIBS = -l:libgpgme.a

LOCAL_AUTOTOOLS_VERSION := 2.0.4
LOCAL_AUTOTOOLS_CONFIGURE_ARGS := \
	--enable-languages= \
	--with-libgpg-error-prefix=$(TARGET_OUT_STAGING)/usr \
	--with-libassuan-prefix=$(TARGET_OUT_STAGING)/usr \
	--disable-gpg-test \
	$(NULL)

LOCAL_AUTOTOOLS_CONFIGURE_ENV :=

LOCAL_CREATE_LINKS := usr/lib/libgpgme-pthread.so.11:libgpgme.so.11 \
	usr/lib/libgpgme-pthread.so:libgpgme.so

#LOCAL_CLEAN_DIRS := $(call local-get-build-dir)/usr/share/ $(call local-get-build-dir)/usr/include/

include $(BUILD_AUTOTOOLS)
